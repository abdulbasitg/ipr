sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast",
	"com/ipragaz/helloworld/model/models",
	"sap/m/MessageBox"
], function (Controller,MessageToast,models,MessageBox) {
	"use strict";
	return Controller.extend("com.ipragaz.helloworld.controller.Main", {
		/**
	*@memberOf com.ipragaz.helloworld.controller.Main
	*/	onInit: function () {
		},
		updateModel : function() {
			var oModel = this.getView().getModel("data");
		}
	});
});