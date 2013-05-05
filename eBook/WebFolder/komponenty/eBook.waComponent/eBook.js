
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'wydawnictwo';
	// @endregion// @endlock

	this.load = function (data) {// @lock

	// @region namespaceDeclaration// @startlock
	var bLewy = {};	// @button
	var button1 = {};	// @button
	var bPrawy = {};	// @button
	// @endregion// @endlock

	// eventHandlers// @lock

	bLewy.click = function bLewy_click (event)// @startlock
	{// @endlock
			$$('componentSrodka').loadComponent({path: "/komponenty/eBooki.waComponent"});
	};// @lock

	button1.click = function button1_click (event)// @startlock
	{// @endlock
		$$('componentSrodka').loadComponent({path: "/komponenty/eBook-edycja.waComponent"});// Add your code here
	};// @lock

	bPrawy.click = function bPrawy_click (event)// @startlock
	{// @endlock
		//	$$('componentSrodka').loadComponent({path: "/komponenty/oferty/lista.waComponent"});
					$$('componentSrodka').loadComponent({path: "/komponenty/oferty/lista.waComponent"});// Add your code here
	};// @lock

	// @region eventManager// @startlock
	WAF.addListener(this.id + "_bLewy", "click", bLewy.click, "WAF");
	WAF.addListener(this.id + "_button1", "click", button1.click, "WAF");
	WAF.addListener(this.id + "_bPrawy", "click", bPrawy.click, "WAF");
	// @endregion// @endlock

	};// @lock


}// @startlock
return constructor;
})();// @endlock
