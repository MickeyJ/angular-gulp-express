
var ProductListDirective = function(){
  return{
    restrict: 'E',
    scope: {
      products: '=',
      isInStock: '=',
      searchName: '=',
      selectedCategoryOption: '=',
      selectedPriceOrder: '=',
      addToCart: '='
    },
    template: '@@import _product-list.html'
  }
};

module.exports = ProductListDirective;