import { Application } from "@hotwired/stimulus";

import characterCountController from "./controllers/character_count_controller.js";




window.Stimulus = Application.start();
Stimulus.register("character-count", characterCountController);

