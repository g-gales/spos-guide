const sharedData = {
  loadProduct: {
    summary: "Load Product Being Returned to Cart",
    details:
      "Scan or search for the product(s) being returned and add them to the cart.",
  },
  scanReceipt: {
    summary: "Search for Transaction or Scan QR Code on Receipt",
    details:
      "Search for the transaction in the CM's account, or scan the QR Code at the bottom of the receipt or email receipt.",
  },
  clickReturn: {
    summary: "Tap Return",
    details: "Tap 'Return' at the top right of the order screen that pops up.",
  },
  addReturnProducts: {
    summary: "Select Returning Products",
    details:
      "Add appropriate products being returned by tapping '+' icon. Be aware of the amount being returned.",
  },
  toggleRestock: {
    summary: "Toggle Restock",
    details:
      "Toggle to restock this product if it is unused. If it's used, toggle this off.",
  },
  loadCM: {
    summary: "Add CM to Cart",
    details: "Add the CM to the transaction.",
  },
  openUnverified: {
    summary: "Tap Unverified Returns Tile",
    details:
      "Tap the ‘Unverified Returns’ tile to open the Unverified Returns window.",
  },
  chooseRefundMethod: {
    summary: "Choose Which Method to Refund",
    details:
      "Ask the CM if they would prefer a refund to a Physical Gift Card or eGift Card. Choose the corresponding tab at the top. Use this new gift card to pay for any exchanging products. Note - eGift cards require an email attached to the CM account.",
  },
  enterDetails: {
    summary: "Complete the ‘Returns Reason’",
    details:
      "Use 'Other' and enter the appropriate ‘Return Reason’ code for each product being returned.",
  },
  completeRefund: {
    summary: "Tap Checkout",
    details:
      "Verify all the return details are correct and tap ‘Checkout’ or 'Refund' at the bottom to complete the return. Note - all verified returns will automatically refund onto the card used in the original purchase.",
  },
  sellNewProduct: {
    summary: "Load Product Being Purchased to Cart",
    details:
      "Complete a normal transaction for the products the CM is purchasing in exchange for the ones they are returning.",
  },
  sellNewDiffuser: {
    summary: "Sell New Diffuser",
    details:
      "Complete a normal transaction with the new diffuser. At checkout, use the 'Split Payment', and then apply the recorded value (with tax) of the returned diffuser as a 'Cash' payment. Any remaining difference will be paid by the CM. ",
  },
  createCustomSKU: {
    summary: "Tap 'Add Custom Sale' Tile",
    details:
      "Tap on the ‘Add Custom Sale’ tile to create a temporary product to be returned. Fill out the required details like Price and Product Name.",
  },
  diffuserFunctional: {
    summary: "Test Diffuser",
    details:
      "Clean and test the diffuser to see if it is defective or damaged, or if it can be fixed. If the diffuser can be fixed, and the CM is satisfied with the result, no return is necessary. Otherwise, proceed below.",
  },
  noDiffuserReturn: {
    summary: "Not Eligible for Return",
    details:
      "A used diffuser that is functional is not eligible for return. Please refer to 'Diffuser Guarantee' on the receipts or the diffuser box.",
  },
  diffuserExchangeValue: {
    summary: "Find Value of Returning Diffuser",
    details:
      "Find the value of the returning diffuser to determine credit available for a new diffuser. Reminder, if a diffuser is used and under warranty, they can only be exchanged, refunds are not permitted. The full credit must be used.",
  },
  unverifiedDiffuserMethod: {
    summary: "Use 'Cash' Option",
    details:
      "To simplify the experience for the CM, use the 'Cash' option for an Unverified Diffuser return.",
  },
  recordValue: {
    summary: "Record Value and RCA",
    details:
      "Record the full value of the returning diffuser including any applicable tax, and the RCA number.",
  },
  removeValue: {
    summary: "Remove Cash with 'Pay Out'",
    details:
      "The cash credit applied to a diffuser exchange must recorded in Shopify. Tap 'View Open Session' under the 'Register Tab', then tap 'Remove Cash'. Under 'Amount' put the recorded total value, and under 'Notes' put the recorded RCA number.",
  },
  noExchanges: {
    summary: "No Exchange Function",
    details:
      "Currently, Shopify does not support exchanges in the same transaction. Please process a return first ",
  },
  openCardiganSell: {
    summary: "Tap 'Cardigan - Sell Physical Gift Card",
    details:
      "Tap 'Cardigan - Sell Physical Gift Card' to open the Gift Card portal.",
  },
  openCardiganRedeem: {
    summary: "Tap 'Cardigan - Redeem Gift Card",
    details:
      "Tap 'Cardigan - Redeem Gift Card' to open the Gift Card redemption portal.",
  },
  scanGiftCard: {
    summary: "Scan Core Gift Card",
    details:
      "Type the full bar code number, or scan the bar code on the back of the Gift Card. Tap 'Look Up'.",
  },
  inputGiftCardPin: {
    summary: "Input Pin",
    details:
      "Carefully remove or scratch off the sticker covering the 4 digit Gift Card pin, and type it in the appropriate field.",
  },
  enterGiftCardDetails: {
    summary: "Enter Card Details",
    details:
      "Tap the 'Custom Physical Gift Card' option, and enter the value to load to the Gift Card. Tap 'Add to Cart' to proceed.",
  },
  completeTransaction: {
    summary: "Complete Transaction",
    details:
      "Click 'Checkout' to complete the transaction, selecting the appropriate payment method.",
  },
  completeGiftCardRedemption: {
    summary: "Complete Transaction",
    details:
      "Click 'Checkout' to complete the transaction, selecting the 'Gift Card' option. Ignoring the camera pop-up, Tap 'Enter Code' at the top, and paste the Gift Card code here. Tap 'Redeem' at the top.",
  },
  getGiftCardCode: {
    summary: "Copy Gift Card Code",
    details:
      "Tap 'Get Code' to generate the Gift Card Code. Select the whole code and copy it. Tap 'Close' to return to the cart.",
  },
  multipleGiftCardCodes: {
    summary: "Get Codes for Each Card",
    details:
      "On a different device, repeat the previous 2 steps to generate a code for each seperate Gift Card. Generating multiple codes on one device will delete the previous codes generated.",
  },
  scanAffiliateCard: {
    summary: "Type Out Card Number",
    details:
      "Scanning Affiliate Cards generates incorrect numbers, so you must physically type out the 'Saje Card #' instead of scanning it.",
  },
  lookupLegacy: {
    summary: "Look Up Card Value",
    details:
      "Legacy Gift Cards don't work with Shopify, so to find the value of the card, login to the bookmarked 'Saje Gift Card Balance - Legacy Cards' site. This site requires gift card numbers be at least 8 digits long, if the legacy card number is shorter, use '9's at the start until it is 8 digits.",
  },
  createNewCard: {
    summary: "Create a Replacement Gift Card",
    details: "Use the value from the previous step to create a new gift card.",
  },
  completeLegacy: {
    summary: "Issue New Card using 'Gift Card Replacement Only'",
    details:
      "Tap 'Checkout' to complete the transaction, selecting the 'Gift Card Replacement Only' method. This method is only to be used for this specific reason.",
  },
  drainLegacy: {
    summary: "Submit a Gift Card Drain Request",
    details:
      "Complete and submit a 'Gift Card Drain Request' form to drain the old Legacy Card now that the value is on a new card.'",
  },
  openHealthyRewards: {
    summary: "Open Healthy Rewards Tile",
    details:
      "Tap the 'Healthy Rewards tile. The points balance will be visible at the top of the screen.",
  },
  scanRedeemableProducts: {
    summary: "Scan the Products",
    details:
      "Scan all eligible products for redemption to the cart. Note - Healthy Rewards redemptions must be completed in a seperate transaction, but multiple redemptions can be completed in a single transaction.",
  },
  updateRewards: {
    summary: "Fill Out Healthy Rewards Update Form",
    details: "Gather all the relevant information and complete the Healthy Rewards Update Form."
  }
};

const guideData = {
  "Returns & Exchanges": {
    Returns: {
      Unverified: {
        Diffusers: {
          Used: {
            "Product in Shopify": {
              "Claimed as Defecive / Damaged": {
                steps: [
                  sharedData.diffuserFunctional,
                  sharedData.loadCM,
                  sharedData.loadProduct,
                  sharedData.openUnverified,
                  sharedData.unverifiedDiffuserMethod,
                  sharedData.enterDetails,
                  sharedData.toggleRestock,
                  sharedData.completeRefund,
                  sharedData.recordValue,
                  sharedData.loadCM,
                  sharedData.sellNewDiffuser,
                  sharedData.removeValue,
                ],
              },
              "Claimed as Functional": {
                steps: [sharedData.noDiffuserReturn],
              },
            },
            "Product Not in Shopify": {
              "Claimed as Defecive / Damaged": {
                steps: [
                  sharedData.diffuserFunctional,
                  sharedData.loadCM,
                  sharedData.createCustomSKU,
                  sharedData.openUnverified,
                  sharedData.unverifiedDiffuserMethod,
                  sharedData.enterDetails,
                  sharedData.toggleRestock,
                  sharedData.completeRefund,
                  sharedData.recordValue,
                  sharedData.loadCM,
                  sharedData.sellNewDiffuser,
                  sharedData.removeValue,
                ],
              },
              "Claimed as Functional": {
                steps: [sharedData.noDiffuserReturn],
              },
            },
          },
          Unused: {
            "Product in Shopify": {
              steps: [
                sharedData.loadCM,
                sharedData.loadProduct,
                sharedData.openUnverified,
                sharedData.unverifiedDiffuserMethod,
                sharedData.enterDetails,
                sharedData.toggleRestock,
                sharedData.completeRefund,
                sharedData.recordValue,
                sharedData.removeValue,
              ],
            },
            "Product Not in Shopify": {
              steps: [
                sharedData.loadCM,
                sharedData.createCustomSKU,
                sharedData.openUnverified,
                sharedData.unverifiedDiffuserMethod,
                sharedData.enterDetails,
                sharedData.toggleRestock,
                sharedData.completeRefund,
                sharedData.recordValue,
                sharedData.removeValue,
              ],
            },
          },
        },
        "Non Diffuser": {
          "Unverified Exchanges": {
            "Product in Shopify": {
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
            "Product Not in Shopify": {
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
            "Product in Shopify": {
              steps: [
                sharedData.loadProduct,
                sharedData.loadCM,
                sharedData.openUnverified,
                sharedData.chooseRefundMethod,
                sharedData.enterDetails,
                sharedData.completeRefund,
              ],
            },
            "Product Not in Shopify": {
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
      Verified: {
        Diffusers: {
          Used: {
            "Claimed as Defecive / Damaged": {
              steps: [
                sharedData.diffuserFunctional,
                sharedData.scanReceipt,
                sharedData.clickReturn,
                sharedData.addReturnProducts,
                sharedData.toggleRestock,
                sharedData.enterDetails,
                sharedData.completeRefund,
                sharedData.diffuserExchangeValue,
                sharedData.loadCM,
                sharedData.sellNewProduct,
              ],
            },
            "Claimed as Functional": {
              steps: [sharedData.noDiffuserReturn],
            },
          },
          Unused: {
            steps: [
              sharedData.scanReceipt,
              sharedData.clickReturn,
              sharedData.addReturnProducts,
              sharedData.toggleRestock,
              sharedData.enterDetails,
              sharedData.completeRefund,
            ],
          },
        },
        "Non Diffusers": {
          steps: [
            sharedData.scanReceipt,
            sharedData.clickReturn,
            sharedData.addReturnProducts,
            sharedData.toggleRestock,
            sharedData.enterDetails,
            sharedData.completeRefund,
          ],
        },
      },
    },
    Exchanges: {
      steps: [sharedData.noExchanges],
    },
  },
  "Gift Cards": {
    "Issuing A New Gift Card": {
      steps: [
        sharedData.openCardiganSell,
        sharedData.scanGiftCard,
        sharedData.completeTransaction,
      ],
    },
    "Redeeming a Gift Card": {
      "One Saje Gift Card": {
        "Core (Copper) Gift Card": {
          steps: [
            sharedData.openCardiganRedeem,
            sharedData.scanGiftCard,
            sharedData.inputGiftCardPin,
            sharedData.getGiftCardCode,
            sharedData.completeGiftCardRedemption,
          ],
        },
        "Affilate (Dark Green Leafy) Gift Card": {
          steps: [
            sharedData.openCardiganRedeem,
            sharedData.scanAffiliateCard,
            sharedData.inputGiftCardPin,
            sharedData.getGiftCardCode,
            sharedData.completeGiftCardRedemption,
          ],
        },
        "Legacy Gift Card": {
          steps: [
            sharedData.lookupLegacy,
            sharedData.createNewCard,
            sharedData.openCardiganSell,
            sharedData.scanGiftCard,
            sharedData.completeLegacy,
            sharedData.openCardiganRedeem,
            sharedData.scanGiftCard,
            sharedData.inputGiftCardPin,
            sharedData.getGiftCardCode,
            sharedData.multipleGiftCardCodes,
            sharedData.completeGiftCardRedemption,
            sharedData.drainLegacy,
          ],
        },
      },
      "Multiple Saje Gift Cards": {
        "Core (Copper) Gift Card": {
          steps: [
            sharedData.openCardiganRedeem,
            sharedData.scanGiftCard,
            sharedData.inputGiftCardPin,
            sharedData.getGiftCardCode,
            sharedData.multipleGiftCardCodes,
            sharedData.completeGiftCardRedemption,
          ],
        },
        "Affilate (Dark Green Leafy) Gift Card": {
          steps: [
            sharedData.openCardiganRedeem,
            sharedData.scanAffiliateCard,
            sharedData.inputGiftCardPin,
            sharedData.getGiftCardCode,
            sharedData.multipleGiftCardCodes,
            sharedData.completeGiftCardRedemption,
          ],
        },
        "Legacy Gift Card": {
          steps: [
            sharedData.lookupLegacy,
            sharedData.createNewCard,
            sharedData.openCardiganSell,
            sharedData.scanGiftCard,
            sharedData.completeLegacy,
            sharedData.openCardiganRedeem,
            sharedData.scanGiftCard,
            sharedData.inputGiftCardPin,
            sharedData.getGiftCardCode,
            sharedData.multipleGiftCardCodes,
            sharedData.completeGiftCardRedemption,
            sharedData.drainLegacy,
          ],
        },
      },
    },
  },
  "Healthy Rewards": {
    "Redeeming Rewards": {
      steps: [
        sharedData.loadCM,
        sharedData.scanRedeemableProducts,
        sharedData.openHealthyRewards,
        sharedData.getGiftCardCode,
        sharedData.completeGiftCardRedemption,
      ],
    },
    "Checking Reward Balance": {
      steps: [
        sharedData.loadCM,
        sharedData.openHealthyRewards,
      ],
    },
    "Updating or Merging Rewards Balance": {
      steps: [
        sharedData.updateRewards,
      ]
    },
  },
};

export { guideData, sharedData };
