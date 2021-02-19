# rails-ujs-zip-2-city
Automatic lookup of city names from danish zip codes using <https://dawa.aws.dk/postnumre> and `rails-ujs`.

Usage
=====
1. Copy the `zip-2-city.js` file into `app/javascript/packs`.
2. Add `import "packs/zip-2-city"` in the `app/javascript/packs/application.js` file.
3. Add `data: { type: "zip", source_id: "zip", target_id: "city" }` to the zip input field in the form, e.g.:

        <%= form_with do |form| %>
          <%= form.text_field(:zip, data: { type: "zip", source_id: "zip", target_id: "city" }) %>                                                                                                                                                             
          <%= form.text_field(:city) %>
        <% end %>

4. The javascript will then look for any/all elements with the attribute `data-type="zip"` and add an `input event listener` to any matching elements.
5. The target input field (where the city name is inserted) is found by using the ID of the source element, replace whatever is written `source_id` with whatever is written in `target_id` and look for that element.
6. When 4 numbers are typed into the zip field, the lookup to <https://dawa.aws.dk/postnumre> is performed, and the city name will be inserted into the city input field.
