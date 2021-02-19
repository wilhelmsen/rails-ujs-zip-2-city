import Rails from '@rails/ujs'

document.addEventListener("turbolinks:load", () => {
		document.querySelectorAll('input[data-type="zip"]').forEach(element => {
				if(element != null && typeof(element) != 'undefined') {
						element.addEventListener("input", function(e) {
								const target_element_id = element.id.replace(element.dataset.sourceId, element.dataset.targetId);
								const target_element = document.querySelector("#"+target_element_id);

								if (target_element != null && typeof(target_element) != 'undefined' && target_element.value.trim().length == 0) {
										const zip_input = this.value.trim();
										const zip_match = zip_input.match(/\d+/);
										if(zip_match != null && typeof(zip_match) != 'undefined' && zip_match.length > 0) {
												const zip = zip_match[0];
												if(zip != null && zip >= 1000 && zip <= 9999) {
														const url = "https://dawa.aws.dk/postnumre/" + zip
														Rails.ajax({
																type: "GET",
																url: url,
																success: function(data) {
																		const navn = data["navn"];
																		if (navn != null) {
																				target_element.value = navn;
																		}
																}, // Success
														})  // Ajax call
												}  // Zip is withing range
										}  // Zip is defined.
								}  // Target element exists.
						})  // Eventlistener
				}  // Element not null
		}) // element
})
