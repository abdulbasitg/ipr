sap.ui.define([
	"sap/ui/model/json/JSONModel",
	"sap/ui/Device"
], function(JSONModel, Device) {
	"use strict";

	return {

		createDeviceModel: function() {
			var oModel = new JSONModel(Device);
			oModel.setDefaultBindingMode("OneWay");
			return oModel;
		},
		createDataModel: function() {
			var myData = {
				firstname : "a",
				lastname : "b",
				adres : {
					cadde :"cad",
					sokak :""
				},
				telefon : [
					{
						tip: "Ev",
						no:"123"
					},
					{
						tip:"Cep",
						no:456
					}
				]
			};
			var oModel = new JSONModel(myData);
			return oModel;
		}	

	};

});