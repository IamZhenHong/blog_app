import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  connect() {
    
  }
  toggleForm() {
    console.log("I clicked the edit button");
    event.preventDefault();
    event.stopPropagation();
  }
}
