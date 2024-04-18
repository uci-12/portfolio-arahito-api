
const express = require("express");
const {
  getPortFolios,
  getPortofolioById,
  createPortfolio,
  updatePortfolio,
  deletePortfolio,
} = require("../controllers/portfolios");

const router = express.Router();

router.get("", getPortFolios);
router.get("/:id", getPortofolioById);
router.post("", createPortfolio);
router.patch("/:id", updatePortfolio);
router.delete("/:id", deletePortfolio);

module.exports = router;
