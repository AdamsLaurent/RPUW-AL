// This file is auto-generated by ./bin/rails stimulus:manifest:update
// Run that command whenever you add a new controller or create them with
// ./bin/rails generate stimulus controllerName

import { application } from "./application"

import AnswerController from "./answer_controller.js"
application.register("answer", AnswerController)

import DeskController from "./desk_controller.js"
application.register("desk", DeskController)

import HelloController from "./hello_controller.js"
application.register("hello", HelloController)

import SolutionController from "./solution_controller.js"
application.register("solution", SolutionController)
