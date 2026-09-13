(() => {
  "use strict";
  const $ = (selector, scope = document) => scope.querySelector(selector);
  const productGrid = $("#product-grid");
  const escapeHTML = (value) => String(value).replace(/[&<>'"]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"}[c]));
  const placeholder = (title, dimensions, subject, filename, alt) => `<div class="placeholder-copy"><strong>${title}</strong><span>${dimensions}</span><span>${subject}</span><code>${filename}</code><small>Alt text: ${alt}</small></div>`;

  function renderProducts() {
    productGrid.innerHTML = products.map(product => `<article class="product-card"><span class="product-badge">${escapeHTML(product.badge)}</span><div class="product-image"><img src="${escapeHTML(product.image)}" width="1200" height="1500" loading="lazy" alt="${escapeHTML(product.name)} bottle on a warm background" data-product-image hidden>${placeholder("Product photograph","1200 × 1500 • 4:5","One centered bottle on a clean, warm background",product.image.split("/").pop(),"describe the bottle, label, and background without repeating the product name")}</div><div class="product-body"><h3>${escapeHTML(product.name)}</h3><p class="product-subtitle"><strong>${escapeHTML(product.subtitle)}</strong></p><p>${escapeHTML(product.description)}</p><div class="product-meta"><span class="heat"><span class="heat-dots" aria-hidden="true">${[1,2,3,4,5].map(n => `<i class="heat-dot ${n <= product.heatLevel ? "on" : ""}"></i>`).join("")}</span><span>${escapeHTML(product.heatLabel)} heat</span></span><span>${escapeHTML(product.size)} • ${escapeHTML(product.price)}</span></div><button class="button product-action" type="button" data-notify="${escapeHTML(product.name)}">${product.available ? "View Sauce" : "Notify Me"}</button><div class="shopify-container" id="shopify-${escapeHTML(product.id)}" data-shopify-product-id="${escapeHTML(product.shopifyProductId)}" aria-label="Reserved for future Shopify Buy Button"></div></div></article>`).join("");
    $("[data-product-image]", productGrid)?.dispatchEvent(new Event("probe"));
    productGrid.querySelectorAll("img").forEach(img => { const show = () => { img.hidden = false; img.nextElementSibling?.remove(); }; img.addEventListener("load", show); img.addEventListener("error", () => img.remove()); if (img.complete && img.naturalWidth) show(); });
  }

  const recipes = [
    {title:"[RECIPE TITLE 01]",pairing:"[SAUCE PAIRING]",time:"[PREP TIME]",intro:"A flexible sample serving idea for showing how future recipes will look.",file:"recipe-01.jpg",sample:true},
    {title:"[RECIPE TITLE 02]",pairing:"[SAUCE PAIRING]",time:"[PREP TIME]",intro:"[SHORT RECIPE INTRODUCTION]",file:"recipe-02.jpg"},
    {title:"[RECIPE TITLE 03]",pairing:"[SAUCE PAIRING]",time:"[PREP TIME]",intro:"[SHORT RECIPE INTRODUCTION]",file:"recipe-03.jpg"}
  ];
  function renderRecipes(){ $("#recipe-grid").innerHTML=recipes.map((r,i)=>`<article class="recipe-card"><div class="recipe-image">${placeholder("Recipe photograph","1200 × 900 • 4:3","Finished dish in warm natural light",r.file,"describe the finished dish and key visible ingredients")}</div><div class="recipe-body"><p class="eyebrow">Pairs with ${escapeHTML(r.pairing)}</p><h3>${escapeHTML(r.title)}</h3><p><strong>${escapeHTML(r.time)}</strong> · ${escapeHTML(r.intro)}</p><button class="button" type="button" data-recipe="${i}">View Recipe</button></div></article>`).join(""); }

  const faqs = [
    ["How hot are the sauces?","[CONFIRM HEAT SCALE AND PRODUCT-SPECIFIC GUIDANCE.] Each product card uses a written heat label as well as a five-point visual scale."],
    ["How should the sauce be stored?","[ADD CONFIRMED STORAGE INSTRUCTIONS FROM YOUR RECIPE OR PROCESS AUTHORITY.]"],
    ["Does it need refrigeration?","[ADD CONFIRMED REFRIGERATION GUIDANCE FROM THE PRODUCT LABEL OR QUALIFIED FOOD-SAFETY SOURCE.]"],
    ["What ingredients are used?","[LIST CONFIRMED INGREDIENTS AND ALLERGEN INFORMATION FOR EACH PRODUCT. Do not generalize across sauces.]"],
    ["Do you offer gift sets?","[CONFIRM GIFT-SET AVAILABILITY, CONTENTS, AND PRICING.]"],
    ["Where do you ship?","Currently, we are only able to sell within the state of Wisconsin."],
    ["How long does shipping take?","As long as it takes us to find a commercial kitchen."],
    ["What happens if a bottle arrives damaged?","If a bottle is damaged, it is often because the customer was not prepared to catch the bottle. We are not able to ship, and it is hard to throw glass very far."],
    ["Can I place a wholesale order?","Yes! Wholesale orders are allowed and encouraged for customers located in Wisconsin. Please reach out for case pricing. Each case contains twelve 5 oz bottles. There is no case minimum, but the maximum depends on our current supply and how much advance notice we receive, as we craft every batch ourselves."]
  ];
  function renderFaqs(){ $("#faq-list").innerHTML=faqs.map((f,i)=>`<div class="accordion-item"><h3><button class="accordion-button" type="button" aria-expanded="false" aria-controls="faq-panel-${i}" id="faq-button-${i}">${escapeHTML(f[0])}</button></h3><div class="accordion-panel" id="faq-panel-${i}" role="region" aria-labelledby="faq-button-${i}" hidden><p>${escapeHTML(f[1])}</p></div></div>`).join(""); }

  renderProducts(); renderRecipes(); renderFaqs();
  const menuButton=$(".menu-toggle"), nav=$("#site-nav");
  const closeMenu=()=>{menuButton.setAttribute("aria-expanded","false");nav.classList.remove("open");document.body.classList.remove("menu-open")};
  menuButton.addEventListener("click",()=>{const open=menuButton.getAttribute("aria-expanded")==="true";menuButton.setAttribute("aria-expanded",String(!open));nav.classList.toggle("open",!open);document.body.classList.toggle("menu-open",!open)});
  nav.addEventListener("click",e=>{if(e.target.closest("a"))closeMenu()});
  document.addEventListener("keydown",e=>{if(e.key==="Escape"){closeMenu(); if(recipeDialog.open)recipeDialog.close();}});
  $("#faq-list").addEventListener("click",e=>{const b=e.target.closest("button");if(!b)return;const open=b.getAttribute("aria-expanded")==="true";b.setAttribute("aria-expanded",String(!open));$("#"+b.getAttribute("aria-controls")).hidden=open;});
  const recipeDialog=$("#recipe-dialog"),recipeContent=$("#recipe-dialog-content");
  $("#recipe-grid").addEventListener("click",e=>{const b=e.target.closest("[data-recipe]");if(!b)return;const r=recipes[Number(b.dataset.recipe)];recipeContent.innerHTML=`<p class="eyebrow">Sample content — replace before publishing</p><h2 id="recipe-dialog-title">${escapeHTML(r.title)}</h2><p><strong>Pairs with:</strong> ${escapeHTML(r.pairing)} &nbsp; <strong>Time:</strong> ${escapeHTML(r.time)}</p><h3>Ingredients</h3><ul><li>[SAMPLE INGREDIENT AND QUANTITY]</li><li>[SAMPLE INGREDIENT AND QUANTITY]</li><li>[HOT SAUCE AMOUNT — adjust to taste]</li></ul><h3>Method</h3><ol class="recipe-steps"><li>[SAMPLE STEP: prepare the ingredients.]</li><li>[SAMPLE STEP: cook or assemble the dish.]</li><li>[SAMPLE STEP: finish with sauce and serve.]</li></ol><p><em>This demonstrates the future recipe format; test and verify the complete recipe before publishing.</em></p>`;recipeDialog.showModal();});
  $(".modal-close").addEventListener("click",()=>recipeDialog.close());recipeDialog.addEventListener("click",e=>{if(e.target===recipeDialog)recipeDialog.close()});
  productGrid.addEventListener("click",e=>{const b=e.target.closest("[data-notify]");if(b){$("#newsletter-email").focus();$("#newsletter-form").scrollIntoView({behavior:matchMedia("(prefers-reduced-motion: reduce)").matches?"auto":"smooth",block:"center"});}});
  function validateForm(form,status,success){if(!form.checkValidity()){form.reportValidity();status.textContent="Please complete the highlighted required fields.";status.className="form-status error";return}status.textContent=success;status.className="form-status";}
  $("#contact-form").addEventListener("submit",e=>{e.preventDefault();validateForm(e.currentTarget,$("#contact-status"),"Your form is ready, but no message was sent. Connect the secure form service described in the README.")});
  $("#newsletter-form").addEventListener("submit",e=>{e.preventDefault();validateForm(e.currentTarget,$("#newsletter-status"),"Signup validated. Connect [EMAIL SIGNUP ENDPOINT] to save subscribers.")});
  $("#current-year").textContent=new Date().getFullYear();
})();
