const Sequelize = require("sequelize");
const db = require("../config/DBConfig");
// regid	acronym	reg_name	reg_type	cancer_type	drug_list	ilex_managectx	ilex_altcamctx	ilex_dateupdatedctx	indg_managectx	indg_altcamctx	indg_dateupdatedctx	isatlf_managectx	isatlf_altcamctx	isatlf_dateupdatedctx	isatrt_managectx	isatrt_altcamctx	isatrt_dateupdatedctx
// drugid	acd	abbrev	alt_name	maincategory	canceruse	emesispot	moa_acd	absorption	protein_bound	primary_met	secondary_met	elim_route	enz_substrate	inducer	inhibitor	acdurl	refs_extra	acddateupdated
// drugid	acd_name	wldindi_hdieffect	wldindi_severity	wldindi_onset	wldindi_evidence	wldindi_ref	wldindi_manage	wldindi_altcam	wldindi_dateupdated	wbark_hdieffect	wbark_severity	wbark_onset	wbark_evidence	wbark_ref	wbark_manage	wbark_altcam	wbark_dateupdated	wlfbtbk_hdieffect	wlfbtbk_severity	wlfbtbk_onset	wlfbtbk_evidence	wlfbtbk_ref	wlfbtbk_manage	wlfbtbk_altcam	wlfbtbk_dateupdated	wlygrrt_hdieffect	wlygrrt_severity	wlygrrt_onset	wlygrrt_evidence	wlygrrt_ref	wlygrrt_manage	wlygrrt_altcam	wlygrrt_dateupdated	wmwd_hdieffect	wmwd_severity	wmwd_onset	wmwd_evidence	wmwd_ref	wmwd_manage	wmwd_altcam	wmwd_dateupdated

// Create users table in MySQL Database
const cams = db.define(
  "cams",
  {
    camid: { type: Sequelize.STRING(10), primaryKey: true },
    cam: { type: Sequelize.STRING },
    acronym: { type: Sequelize.STRING },
    comm_name: { type: Sequelize.TEXT },
    sci_name: { type: Sequelize.TEXT },
    pinyin: { type: Sequelize.TEXT },
    main_const: { type: Sequelize.TEXT },
    other_const: { type: Sequelize.TEXT },
    four_nature: { type: Sequelize.TEXT },
    hotcold: { type: Sequelize.STRING },
    five_flavor: { type: Sequelize.TEXT },
    nourish_property: { type: Sequelize.TEXT },
    CAindication: { type: Sequelize.TEXT },
    moaCAind: { type: Sequelize.TEXT },
    otherindication: { type: Sequelize.TEXT },
    adr: { type: Sequelize.TEXT },
    proteinbinding: { type: Sequelize.TEXT },
    metabolism: { type: Sequelize.TEXT },
    elimination: { type: Sequelize.TEXT },
    enz_substrate: { type: Sequelize.TEXT },
    enz_inducer: { type: Sequelize.TEXT },
    enz_inhibitor: { type: Sequelize.TEXT },
    camurl: { type: Sequelize.TEXT },
    refherb: { type: Sequelize.TEXT },
    refadr: { type: Sequelize.TEXT },
    camdataupdated: { type: Sequelize.STRING },
  },
  
  {
    timestamps: false,
  }
);

module.exports = cams;
