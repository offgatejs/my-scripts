({
    calculateDiscount: function(basePrice, discountRate) {
        return basePrice * (1 - discountRate);
    },
    logHello: function() {
        return "Hello from My Personal controlled AI !!!";
    },
    myRec : function(rec, id) {
        var soObj = rec.load({
            type: record.Type.SALES_ORDER, 
            id: id,
            isDynamic: true,
        });
        return soObj;
    }

})
