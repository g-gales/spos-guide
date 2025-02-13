const sharedData = {
  loadProduct: {
    summary: "Load Product Being Returned to Cart",
    details:
      "Scan or search for the product(s) being returned and add them to the cart.",
  },
  loadCM: {
    summary: "Add CM to Cart",
    details:
      "Add the CM to the transaction - All unverified returns or exchanges must have a CM attached to the transaction.",
  },
  openUnverified: {
    summary: "Tap Unverified Returns Tile",
    details:
      "Tap the ‘Unverified Returns’ tile to open the Unverified Returns window.",
  },
  chooseRefundMethod: {
    summary: "Choose Which Method to Refund",
    details:
      "Ask the CM if they would prefer a refund to a Physical Gift Card, eGift Card, or if applicable Cash. Choose the corresponding tab at the top.",
  },
  enterDetails: {
    summary: "Complete the ‘Returns Reason’",
    details:
      "Enter the appropriate ‘Return Reason’ code for each product being returned, and toggle whether the returning object should be added to our inventory.",
  },
  completeRefund: {
    summary: "Tap Checkout",
    details:
      "Verify all the return details are correct and tap ‘Checkout’ at the bottom to complete the unverified return.",
  },
  sellNewProduct: {
    summary: "Load CM & Product Being Purchased to Cart",
    details:
      "Complete a normal transaction for the products the CM is purchasing in exchange for the ones they are returning using the Gift Card that was just created, or with the Cash that was just removed.",
  },
  createCustomSKU: {
    summary: "Tap Custom SKU Tile",
    details:
      "Tap on the ‘Custom SKU’ tile to create a temporary product to be returned. Fill out the required details like Price and Product Name.",
  },
};

const guideData = {
  "Returns & Exchanges": {
    Returns: {
      Unverified: {
        "Unverified Exchanges": {
          "Product We Currently Sell": {
            steps: [
              sharedData.loadProduct,
              sharedData.loadCM,
              sharedData.openUnverified,
              sharedData.chooseRefundMethod,
              sharedData.enterDetails,
              sharedData.completeRefund,
              sharedData.sellNewProduct,
            ],
          },
          "Product We No Longer Sell": {
            steps: [
              sharedData.createCustomSKU,
              sharedData.loadCM,
              sharedData.openUnverified,
              sharedData.chooseRefundMethod,
              sharedData.enterDetails,
              sharedData.completeRefund,
              sharedData.sellNewProduct,
            ],
          },
        },
        "Unverified Refunds": {
          "Product We Currently Sell": {
            steps: [
              sharedData.loadProduct,
              sharedData.loadCM,
              sharedData.openUnverified,
              sharedData.chooseRefundMethod,
              sharedData.enterDetails,
              sharedData.completeRefund,
            ],
          },
          "Product We No Longer Sell": {
            steps: [
              sharedData.createCustomSKU,
              sharedData.loadCM,
              sharedData.openUnverified,
              sharedData.chooseRefundMethod,
              sharedData.enterDetails,
              sharedData.completeRefund,
            ],
          },
        },
      },
    },
  },
  "Gift Cards": {
    /* Other Gift Card processes */
  },
};

export { guideData, sharedData };
