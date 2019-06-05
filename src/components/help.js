let profileImg;
var getProfile = setInterval(function () {
    if (document.getElementById("productPhotoImg") != undefined) {
        profileImg = document.getElementById("productPhotoImg");
        clearInterval(getProfile);
        var checkForBoldFinished = setInterval(function () {
            if (document.getElementsByClassName("bold_option_value_swatch")[0].childNodes[0].style.backgroundImage) {
                let img;
                let lengthBold = document.getElementsByClassName("bold_option_value").length;
                for (var i = 0; i < lengthBold; i++) {
                    document.getElementsByClassName("bold_option_value")[i].onclick = (function (i) {
                        return function () {
                            img = document.getElementsByClassName("bold_option_value_swatch")[i].childNodes[0].style.backgroundImage;
                            img = img.substring(img.indexOf("h"));
                            img = img.substring(0, img.length - 2);
                            profileImg.src = img;
                        };
                    })(i);
                };
                document.getElementsByClassName("bold_option_value_swatch")[0].childNodes[0].click();
                clearInterval(checkForBoldFinished)
            }
        }, 100); // check every 100ms

    }
}, 100);

/*
{% comment %} Bold:POv2 {% endcomment %}
{%- include 'bold-product' with product, hide_action: 'break', output: 'none' -%}
<div class="product-greeting-card" id="ProductSection" data-section-id="{{ section.id }}" data-section-type="product-template" data-zoom-toggle="zoom-in" data-zoom-enabled="{{ section.settings.product_image_zoom_enable }}" data-related-enabled="{{ section.settings.product_related_enable }}" data-social-sharing="{{ section.settings.social_sharing }}" data-show-compare-at-price="{{ section.settings.product_show_compare_at_price }}" data-stock="{{ section.settings.product_quantity_message }}" data-incoming-transfer="{{ section.settings.product_incoming_message }}">
{% unless product.tags contains 'card' %}
  {% include 'breadcrumb' %}
{% endunless %}

  <div class="grid" itemscope itemtype="http://schema.org/Product">
    <meta itemprop="url" content="{{ shop.url }}{{ product.url }}">
    <meta itemprop="image" content="{{ product.featured_image.src | img_url: 'grande' }}">

    <div class="grid-item large--two-fifths">
      <div class="grid">
        <div class="grid-item large--eleven-twelfths text-center">
          <div id="greetingCardDiv">

            {{ 'card2.jpg' |  asset_url | img_tag}}
            <br>
            <p class="greetingCardText">
              Select a cover picture below,<br>
              then further personalize your card.
            </p>
          </div>
          <div class="product-photo-container" id="productPhoto">
            {% assign featured_image = product.selected_or_first_available_variant.featured_image | default: product.featured_image %}
            <img id="productPhotoImg" src="{{ featured_image | img_url: 'large' }}" alt="{{ featured_image.alt | escape }}" {% if section.settings.product_image_zoom_enable %} data-zoom="{{ featured_image | img_url: '1024x1024' }}" data-image-id="{{ featured_image.id }}"{% endif %}>
          </div>
          {% if product.images.size > 1 %}
          <ul class="product-photo-thumbs grid-uniform" id="productThumbs-{{ section.id }}">

            {% for image in product.images %}
            <li class="grid-item medium-down--one-third large--one-third">
              <a href="{{ image.src | img_url: 'large' }}" class="product-photo-thumb product-photo-thumb-{{ section.id }}" data-image-id="{{ image.id }}">
                <img src="{{ image.src | img_url: 'compact' }}" alt="{{ image.alt | escape }}">
              </a>
            </li>
            {% endfor %}

          </ul>
          {% endif %}

        </div>
      </div>

    </div>

    <div class="grid-item large--three-fifths">
      <b><h1 class="h2" itemprop="name">{{ product.title }}</h1></b>

      <div itemprop="offers" itemscope itemtype="http://schema.org/Offer">

        {% assign variant = product.selected_or_first_available_variant %}

        <meta itemprop="priceCurrency" content="{{ shop.currency }}">
        <meta itemprop="price" content="{{ variant.price | divided_by: 100.00 }}">

        <!-- Price for Gifts as regular and price for cards written as price + postage as opposed to the regular way price is displayed -->
        <ul class="inline-list product-meta">
          <li>
            <span class="h2 price">$2.95 plus 49¢ postage</span>
          </li>
        </ul>

        <!-- Vendor with link to original gift -->        
        <p class="vendor product-meta" itemprop="brand">{{ product.vendor }} customized with a photo and description of <a href="{{ product.url|remove: '-card'}}">this gift</a>.</p>

        <hr id="variantBreak" class="hr--clear hr--small">

        <link itemprop="availability" href="http://schema.org/{% if product.available %}InStock{% else %}OutOfStock{% endif %}">

        <form action="/cart/add" method="post" enctype="multipart/form-data" id="addToCartForm">

        <div class="card-info">
          <h2>GREETING CARD COVER IMAGE</h2>
          <p>Here are two ways to personalize the cover of your greeting card:</p>
              <ol>
                <li>Choose one of our beautiful images (the selected image will appear large at the top of the set).</li>
                <li>Choose the “I am uploading my own cover image” option from the set, and then use this button to upload your own image. </li>
          	  </ol>
            <p>The tool will let you crop it to the correct width: height ratio. For the best print quality, the selected part of the image should be at least 1900px wide.</p>
        </div>
          
        <div id="uploadery-container"></div>

          {% comment %} Bold:POv2 {% endcomment %}
          <div class="bold_options" data-product-id="{{ product.id }}"></div>

          <!--   Hides variant selector on gift products   -->
          <div {% if product.variants.size == 1 or product.tags contains 'no-variant' %} style="display: none;"{% endif %}>
            <select name="id" id="productSelect-{{ section.id }}" class="product-variants product-variants-{{ section.id }}">
              {% for variant in product.variants %}
              {% if variant.available %}
              <option {% if variant == product.selected_or_first_available_variant %} name='var' selected="selected" {% endif %} data-sku="{{ variant.sku }}" value="{{ variant.id }}">{{ variant.title }} - {{ variant.price | money_with_currency }}</option>

              {% else %}
              <option disabled="disabled">
                {{ variant.title }} - {{ 'products.product.sold_out' | t }}
              </option>

              {% endif %}
              {% endfor %}
            </select>
          </div>       
         <!--Uploadery by ShopPad-->
          <div id="uploadery-container"></div>

          {% if section.settings.product_quantity_enable or product.tags contains "A Gift Card_Gift Cards"  %}
          <label for="quantity" class="quantity-selector quantity-selector-{{ section.id }}">{{ 'products.product.quantity' | t }}</label>
          <input type="number" id="quantity" name="quantity" value="1" min="1" class="quantity-selector">
          {% endif %}


          <div class="skt_gc_button_container"></div> <div class="skt_gc_preview_button_container"></div>

          <button type="submit" name="add" id="addToCart" class="btn">
            {% include 'skt_gc_lineitems' %}
            <span class="icon icon-cart"></span>
            <span id="addToCartText-{{ section.id }}">{{ 'products.product.add_to_cart' | t }}</span>
          </button>


          {% if section.settings.product_quantity_message%}
          <span id="variantQuantity-{{ section.id }}" class="variant-quantity {% if variant.inventory_management and variant.inventory_quantity < 10 and variant.inventory_quantity > 0 %} is-visible{% endif %}">
            {% if variant.inventory_management and variant.inventory_quantity < 10 and variant.inventory_quantity > 0 %}
            {% assign qty = variant.inventory_quantity %}
            {{ 'products.product.only_left' | t: count: qty }}
            {% endif %}
          </span>
          {% endif %}


          {% if section.settings.product_incoming_message %}
          <span id="variantIncoming-{{ section.id }}" class="variant-quantity {% if variant.inventory_management and variant.inventory_quantity <= 0 and variant.incoming %} is-visible{% endif %}">
            {% if variant.inventory_management and variant.inventory_quantity == 0 or variant.inventory_quantity < 0 and current_variant.incoming %}
            {% if variant.available %}
            {% assign date = variant.next_incoming_date | date: "month_day_year" %}
            {{ 'products.product.will_not_ship_until' | t: date: date  }}
            {% else %}
            {% assign date = variant.next_incoming_date | date: "month_day_year" %}
            {{ 'products.product.will_be_in_stock_after' | t: date: date }}
            {% endif %}
            {% endif %}
          </span>
          {% endif %}
        </form>

        <hr>

      </div>
    </div>
  </div>

  {% if section.settings.related_products_enable %}
  {% assign grid_item_width = 'large--one-fifth medium--one-third small--one-half' %}
  {% include 'related-products' %}
  {% endif %}

  {% if section.settings.product_reviews_enable %}
  <hr>
  <div id="shopify-product-reviews" data-id="{{ product.id }}">{{ product.metafields.spr.reviews }}</div>
  {% endif %}

  {% unless product == empty %}
  <script type="application/json" id="ProductJson-{{ section.id }}">
    {{ product | json }}
  </script>
  {% if section.settings.product_quantity_message or section.settings.product_incoming_message %}
  <script type="application/json" id="VariantJson-{{ section.id }}">
      [
        {% for variant in product.variants %}
          {
             "incoming": {% if variant.incoming == 'null' or variant.next_incoming_date == null %}false{% else %}{{ variant.incoming | default: false | json }}{% endif %},
             "next_incoming_date": {{ variant.next_incoming_date | date: format: 'month_day_year' | json }}
          }{% unless forloop.last %},{% endunless %}
        {% endfor %}
      ]
  </script>
  {% endif %}
  {% endunless %}
</div>

{% schema %}
{
"name": "Product",
"class": "product-template-section",
"settings": [
{
"type": "checkbox",
"id": "product_image_zoom_enable",
"label": "Enable image zoom"
},
{
"type": "checkbox",
"id": "product_quantity_enable",
"label": "Show quantity selector"
},
{
"type": "checkbox",
"id": "product_quantity_message",
"label": "Show remaining quantity message"
},
{
"type": "checkbox",
"id": "product_incoming_message",
"label": "Show incoming stock transfer message when sold out"
},
{
"type": "checkbox",
"id": "product_vendor_enable",
"label": "Show product vendor"
},
{
"type": "checkbox",
"id": "product_show_saved_amount",
"label": "Show saved amount",
"default": true
},
{
"type": "checkbox",
"id": "product_show_compare_at_price",
"label": "Show compare at price",
"default": false
},
{
"type": "checkbox",
"id": "related_products_enable",
"label": "Show related products"
},
{
"type": "checkbox",
"id": "social_sharing_products",
"label": "Enable product sharing",
"default": true
},
{
"type": "checkbox",
"id": "product_reviews_enable",
"label": "Enable product reviews",
"info": "Install the free Shopify [Product Reviews](https:\/\/apps.shopify.com\/product-reviews) app to add product reviews."
}
]
}
{% endschema %}

{% comment %}
Place this in your product.liquid template, at the bottom.
{% endcomment %}
{% if product.variants.size > 1 %}
<script>
  var variantImages = {},
      thumbnails,
      variant,
      variantImage,
      optionValue,
      productOptions = [];
  {% for variant in product.variants %}
  variant = {{ variant | json }};
  if ( typeof variant.featured_image !== 'undefined' && variant.featured_image !== null ) {
    variantImage =  variant.featured_image.src.split('?')[0].replace(/http(s)?:/,'');
    variantImages[variantImage] = variantImages[variantImage] || {};
    {% for option in product.options %}

    {% assign option_value = variant.options[forloop.index0] %}
    {% assign option_key = 'option-' | append: forloop.index0 %}

    if (typeof variantImages[variantImage][{{ option_key | json }}] === 'undefined') {
      variantImages[variantImage][{{ option_key | json }}] = {{ option_value | json }};
    }
    else {
      var oldValue = variantImages[variantImage][{{ option_key | json }}];
      if ( oldValue !== null && oldValue !== {{ option_value | json }} )  {
          variantImages[variantImage][{{ option_key | json }}] = null;
          }
          }
          {% endfor %}
          }
          productOptions.push(variant);
      {% endfor %}
    let profileImg;
var getProfile = setInterval(function () {
    if (document.getElementById("productPhotoImg") != undefined) {
        profileImg = document.getElementById("productPhotoImg");
        clearInterval(getProfile);
        var checkForBoldFinished = setInterval(function () {
            if (document.getElementsByClassName("bold_option_value_swatch")[0].childNodes[0].style.backgroundImage) {
                let img;
                let lengthBold = document.getElementsByClassName("bold_option_value").length;
                for (var i = 0; i < lengthBold; i++) {
                    document.getElementsByClassName("bold_option_value")[i].onclick = (function (i) {
                        return function () {
                            img = document.getElementsByClassName("bold_option_value_swatch")[i].childNodes[0].style.backgroundImage;
                            img = img.substring(img.indexOf("h"));
                            img = img.substring(0, img.length - 2);
                            profileImg.src = img;
                        };
                    })(i);
                };
                document.getElementsByClassName("bold_option_value_swatch")[0].childNodes[0].click();
                clearInterval(checkForBoldFinished)
            }
        }, 100); // check every 100ms

    }
}, 100);
    

</script> 
{% endif %}



*/