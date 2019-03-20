sap.ui.define(
	[
		"sap/ui/core/mvc/Controller"
	],
	function (Controller) {
		"use strict";
		return Controller.extend("sap.ui.demo.CoolApp.controller.Main", {
			onSayHello: function () {
				alert("Hello from Controller");
			}
		});
	}
);