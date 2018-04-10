(function(){
	
	sap.ui.define("so_overview.Component",["sap/ui/core/UIComponent","sap/ui/model/odata/v2/ODataModel"],function(UIComponent,ODataModel){
		
		return UIComponent.extend("so_overview.Component",{
			
			metadata : {
				manifest : "json"
			},
			
			/*metadata : {
				// General Information
				name: "SO Overview",
				version: "1.0",
				includes: [],
				dependencies: {
					libs: ["sap.m","sap.ui.layout"]
				},
				rootView: "so_overview.views.login",
				 config: {
					resourceBundle: "",
					serviceConfig:{
					name: "",
					serviceUrl: "proxy/http/DB41VV12.mobolutions.com:8001/sap/opu/odata/sap/ZHCP_SALESORDER_APP_SRV/"
					 
					}
				},
				
			  	routing: {
					config: {
						viewType: "XML",
						viewPath: "so_overview.views",
						clearTarget: false,
						controlId:"login",
						controlAggregation: "pages",
						transition: "show"
					},
					routes: [
						
						{ 
							 pattern: "login",
							 name: "login",
							 target: "login",
							 controlAggregation: "pages",
						  	
						  
					
							 subroutes: [
					                    { 
						                   pattern: "Master",
						                   name: "Master",
						                   target: "Master",
						                   controlAggregation: "masterPages",
						     subroutes:[
						    	       {       
						    	    	   pattern: "Detail/{SalesOrderNumber}",
						    	    	   name :"Detail",
						    	    	   target: "Detail",
						    	    	   controlAggregation: "detailPages"
						    	       }]
					                    }]
							  
					  },
					  {
						  pattern: "postjob/{SalesOrderNumber}/{con}",
						  name: "postjob",
						  target: "postjob",
						  controlAggregation: "pages"
					  },
					  
					],
					targets: {
						
						
						  splitviewTarget: {
							  viewName:"root"
						  },
						  login:{

								viewName: "login",
								controlAggregation: "pages"
						  },
						
						Master: {
							viewName: "Master",
							controlId:"idSplitApp",
							 parent: "splitviewTarget",
							controlAggregation: "masterPages"
						},
						Detail: {
							viewName: "Detail",
							controlId:"idSplitApp",
							 parent: "splitviewTarget",
							controlAggregation: "detailPages"
						},
						 	
						postjob: {
							viewName: "postjob",
							controlAggregation: "pages"
						}
					}
				}
			},*/
			
			init : function () {
var oDeviceModel = new sap.ui.model.json.JSONModel({
					
					isPhone:  sap.ui.Device.system.phone, 
				
					listMode:  sap.ui.Device.system.phone,
					listItemType:  sap.ui.Device.system.phone 
				});
				oDeviceModel.setDefaultBindingMode("OneWay");
				this.setModel(oDeviceModel, "device");

				 
				
				sap.ui.core.UIComponent.prototype.init.apply(this,arguments);
				
				this.getRouter().initialize();
				window.location.hash = "";
			
			},

			/**
			 * The component is destroyed by UI5 automatically.
			 * In this method, the ListSelector and ErrorHandler are destroyed.
			 * @public
			 * @override
			 */
			destroy : function () {
				this.oListSelector.destroy();
				this._oErrorHandler.destroy();
				// call the base component's destroy function
				UIComponent.prototype.destroy.apply(this, arguments);
			},

			/**
			 * This method can be called to determine whether the sapUiSizeCompact or sapUiSizeCozy
			 * design mode class should be set, which influences the size appearance of some controls.
			 * @public
			 * @return {string} css class, either 'sapUiSizeCompact' or 'sapUiSizeCozy' - or an empty string if no css class should be set
			 */
			getContentDensityClass : function() {
				if (this._sContentDensityClass === undefined) {
					// check whether FLP has already set the content density class; do nothing in this case
					if (jQuery(document.body).hasClass("sapUiSizeCozy") || jQuery(document.body).hasClass("sapUiSizeCompact")) {
						this._sContentDensityClass = "";
					} else if (!Device.support.touch) { // apply "compact" mode if touch is not supported
						this._sContentDensityClass = "sapUiSizeCompact";
					} else {
						// "cozy" in case of touch support; default for most sap.m controls, but needed for desktop-first controls like sap.ui.table.Table
						this._sContentDensityClass = "sapUiSizeCozy";
					}
				}
				return this._sContentDensityClass;
			}

			
			/*init: function(){
				
				var oDeviceModel = new sap.ui.model.json.JSONModel({
					
					isPhone:  sap.ui.Device.system.phone, 
				
					listMode:  sap.ui.Device.system.phone,
					listItemType:  sap.ui.Device.system.phone 
				});
				oDeviceModel.setDefaultBindingMode("OneWay");
				this.setModel(oDeviceModel, "device");

				 
				
				sap.ui.core.UIComponent.prototype.init.apply(this,arguments);
				
				this.getRouter().initialize();
				window.location.hash = "";
			
				var oConfig = this.getMetadata().getConfig();
				 sServiceUrl = oConfig.serviceConfig.serviceUrl;
				
			    oModel = new ODataModel(sServiceUrl,true);
				this.setModel(oModel);
				
				
				this._handleRoutingTargetsDisplay();
			},
			
			_handleRoutingTargetsDisplay: function(){
				
				var oTargets = this.getRouter().getTargets();
				oTargets.attachDisplay(function(oEvent){
				
					var oTargetControl = oEvent.getParameter("control");
					var sTargetViewId = oEvent.getParameter("view").getId();
					var sTransition = oEvent.getParameter("config").transition;
					
					oTargetControl.to(sTargetViewId,sTransition);
				});	
				
			}*/
			
		});
		
	});
	
})();