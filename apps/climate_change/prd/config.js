// config.js JRG 25-JUN-2018
// Lists base data to create URLs for all map service layers used by web map apps for GWRC Climate Change application.
// 

var windMag = {
    annLayerId: 1,
	layerLegend: "img/Wind_99pct_legend_v02.jpg",
	popupText: " % change",
	seasonalData: false,
	seasonalLayerId: 0
  };
var wind10ms = {
    annLayerId: 10,
	layerLegend: "img/Wind_10ms_Legend.JPG",
	popupText: " days per year",
	seasonalData: false,
	seasonalLayerId: 0
  };
var dryDays = {
    annLayerId: 19,
	layerLegend: "img/Drydays_legend_01.JPG",
	popupText: " days per year",
	seasonalData: true,
	seasonalLayerId: 33
  };
var wetDays1mm = {
    annLayerId: 28,
	layerLegend: "img/WetDaysOver1mm_Legend.JPG",
	popupText: " days per year",
	seasonalData: true,
	seasonalLayerId: 66
  };
var wetDays25mm = {
    annLayerId: 37,
	layerLegend: "img/WetDaysOver25mm_Legend.JPG",
	popupText: " days per year",
	seasonalData: true,
	seasonalLayerId: 99
  };
var totalRain = {
    annLayerId: 46,
	layerLegend: "img/Rainfall_Legend.JPG",
	popupText: " %",
	seasonalData: true,
	seasonalLayerId: 132
  };
var totalRain99pct = {
    annLayerId: 55,
	layerLegend: "img/Rainfall_99pct_Legend.JPG",
	popupText: " %",
	seasonalData: false,
	seasonalLayerId: 0
  };
var GDD5deg = {
    annLayerId: 64,
	layerLegend: "img/GDD5_legend.JPG",
	popupText: " GDD units per year",
	seasonalData: false,
	seasonalLayerId: 0
  };
var GDD10deg = {
    annLayerId: 73,
	layerLegend: "img/GDD10_legend.JPG",
	popupText: " GDD units per year",
	seasonalData: false,
	seasonalLayerId: 0
  };
var hotDays = {
    annLayerId: 82,
	layerLegend: "img/HotDays_legend_v01.jpg",
	popupText: " days per year",
	seasonalData: false,
	seasonalLayerId: 0
  };
var coldNights = {
    annLayerId: 91,
	layerLegend: "img/ColdNights_Legend.JPG",
	popupText: " days per year",
	seasonalData: false,
	seasonalLayerId: 0
  };
var PED = {
    annLayerId: 100,
	layerLegend: "img/PED_mm_Legend.JPG",
	popupText: " mm accum per year",
	seasonalData: false,
	seasonalLayerId: 0
  };
var PED300mm = {
    annLayerId: 109,
	layerLegend: "img/PED_300mm_Legend.JPG",
	popupText: " days per year",
	seasonalData: false,
	seasonalLayerId: 0
  };
var SMDD = {
    annLayerId: 118,
	layerLegend: "img/SMDD_Legend.JPG",
	popupText: " days per year",
	seasonalData: false,
	seasonalLayerId: 0
  };
var meanTemp = {
    annLayerId: 127,
	layerLegend: "img/MeanTemp_Legend.JPG",
	popupText: " deg C",
	seasonalData: true,
	seasonalLayerId: 165
  };
var minTemp = {
    annLayerId: 136,
	layerLegend: "img/MeanMinTemp_Legend.JPG",
	popupText: " deg C",
	seasonalData: true,
	seasonalLayerId: 198
  };
var maxTemp = {
    annLayerId: 145,
	layerLegend: "img/MeanMaxTemp_Legend.JPG",
	popupText: " deg C",
	seasonalData: true,
	seasonalLayerId: 231
  };
var DATR = {
    annLayerId: 154,
	layerLegend: "img/Diurnal_Temp_Legend.JPG",
	popupText: " deg C",
	seasonalData: true,
	seasonalLayerId: 264
  };
var snowDays = {
    annLayerId: 163,
	layerLegend: "img/SnowDays_Legend.JPG",
	popupText: " days per year",
	seasonalData: false,
	seasonalLayerId: 0
  };
var solRad = {
    annLayerId: 172,
	layerLegend: "img/SolRad_Legend.JPG",
	popupText: " %",
	seasonalData: true,
	seasonalLayerId: 297
  };
var relHum = {
    annLayerId: 181,
	layerLegend: "img/RelHumidity_Legend.JPG",
	popupText: " %",
	seasonalData: true,
	seasonalLayerId: 330
  };

// Key-value pairs for layer group type names & matching sets of data values
// Key to match text value used in select dropdown in user interface
var ccLayerData = {
    "Windy days magnitude - (99th percentile)": windMag,
    "Windy days over 10m/s average": wind10ms,
	"Dry Days <1mm per day": dryDays,
	"Wet days over 1mm per day": wetDays1mm,
	"Wet days over 25mm per day": wetDays25mm,
	"Total rainfall": totalRain,
	"99th percentile of daily rainfall": totalRain99pct,
	"Growing degree days base 5C": GDD5deg,
	"Growing degree days base 10C": GDD10deg,
	"Hot days >25C": hotDays,
	"Cold nights - decrease in days per year": coldNights,
	"Potential evapotranspiration deficit": PED,
	"Potential evapotranspiration deficit (PED) days over 300mm": PED300mm,
	"Soil moisture deficit days": SMDD,
	"Mean temperature": meanTemp,
	"Mean min temp": minTemp,
	"Mean max temp": maxTemp,
	"Diurnal annual temp range": DATR,
	"Snow days": snowDays,
	"Solar radiation": solRad,
	"Relative humidity": relHum
};

// Key-value pairs for layer group type names & matching intro text
var ccLayerIntroText = {
    "Windy days magnitude - (99th percentile)": "The 99th percentile measure shows modelled changes in the occurrence of stronger (extreme) winds, in %.",
    "Windy days over 10m/s average": "Modelled changes in the number of windy days, where wind speeds are over 10m/s on average.",
	"Dry Days <1mm per day": "Dry days are defined as days with rainfall less than 1 mm.",
	"Wet days over 1mm per day": "Projections of rain days (where daily rain >1 mm) are presented for 2040 and 2090, compared to 1995 under RCP4.5 and RCP8.5. The number of rain days is expected to decline across the Wellington Region under both RCP4.5 and RCP8.5 at 2040 and 2090.",
	"Wet days over 25mm per day": "Projections of heavy rain days (where daily rain >25 mm) are presented for 2040 and 2090 in these maps.",
	"Total rainfall": "In general, rainfall is projected to increase in the west of the Wellington Region and decrease in the east of the region.",
	"99th percentile of daily rainfall": "Changes in the magnitude of extreme precipitation, as quantified by the changes in the 99th percentile of the daily precipitation distribution (i.e. the top 1% of rain days). This shows increases across the region. The most increases in 99th percentile daily precipitation are generally around Wellington city, as well as in the coastal areas of the region.",
	"Growing degree days base 5C": "Growing degree-days (GDD) express the annual sum of daily temperatures above a base temperature (5˚C) that represent a threshold of plant growth. The daily GDD total is the amount the daily average temperature exceeds the 5°C threshold value.",
	"Growing degree days base 10C": "Growing degree-days (GDD) express the annual sum of daily temperatures above a base temperature (10˚C) that represent a threshold of plant growth. The daily GDD total is the amount the daily average temperature exceeds the 10°C threshold value.",
	"Hot days >25C": "Hot Days are considered as the number of days per year equal to or exceeding 25°C.",
	"Cold nights - decrease in days per year": "Changes in the annual number of cold nights (frosts) in the Wellington Region (i.e. nights with minimum overnight temperature less than 0°C).",
	"Potential evapotranspiration deficit": "Changes in PED per annum. Potential Evapotranspiration Deficit (PED) describes a shortfall in available soil water to meet plant growth, and is a measure of drought intensity.",
	"Potential evapotranspiration deficit (PED) days over 300mm": "This measure describes the modelled change in the number of days in a year where PED exceeds 300mm, which indicates the length of drought periods.",
	"Soil moisture deficit days": "Projected change in number of days in soil moisture deficit (SMD) per year. This is an indicator of decadal drought frequency.",
	"Mean temperature": "Projected change in annual mean temperature, in °C. The amount of the temperature change projections varies with the RCP and also with the climate models used. Projected annual temperature increases are up to 1°C by 2040 and up to 3°C by 2090. Model agreement is very good for average temperature projections as all models project an increase under both RCPs at both time periods.",
	"Mean min temp": "Projected annual daily mean minimum temperature changes, in °C.",
	"Mean max temp": "Projected annual daily mean maximum temperature changes, in °C.",
	"Diurnal annual temp range": "Projected annual and seasonal diurnal temperature range (Tmax minus Tmin) changes, in °C.",
	"Snow days": "Changes in snow days frequency per annum. Snow days are defined as precipitation days where the mean temperature is below the freezing point. Current climatology (1986-2005) shows that the maximum amount of snow days experienced in the region is two days per year, in the highest elevations of the Tararua Ranges. (This is likely underestimated in models). The number of snow days per year is expected to reduce everywhere.",
	"Solar radiation": "Projections of changes to solar radiation, in MJ m2 / day.",
	"Relative humidity": "Projected changes to daily mean relative humidity, %."
};

// Key-value pairs for layer group type names & matching main body text
var ccLayerBodyText = {
    "Windy days magnitude - (99th percentile)": "The maps show how the 99th percentile winds at 2040 and 2090 differ from the current climate. <br>Relatively small increases in extreme daily winds are projected for the Wellington Region. The greatest increases are projected for eastern parts of the Wairarapa hill country for 2090 under RCP8.5, where a 3-4% increase in the 99th percentile of daily mean wind speeds is projected.<br>Model agreement is good under RCP8.5 at 2090, RCP8.5 at 2040 and RCP4.5 at 2090, as most models predict an increase in extreme daily wind across the region. <br>No seasonal breakdown of extremes is given, but it is expected that the higher winds are primarily due to the increased westerly pressure gradient in winter and spring.<br> <br><A HREF='http://www.gw.govt.nz/assets/Climate-change/Climate-Change-and-Variability-report-Wlgtn-Regn-High-Res-with-Appendix.pdf#page=112' target='_blank'> See details in report.</a><br>",
    "Windy days over 10m/s average": "The number of windy days per year is expected to increase across the whole Wellington Region at both time periods for both scenarios. <br>The south of the region is expected to have the largest increase in windy days, with up to six more windy days per year under both scenarios at 2040 and 2090, and over 10 more windy days per year under RCP8.5 at 2090 for some parts of the region. This is about 50% more windy days than at present by 2090 under RCP8.5. <br>Most of the region is expected to experience increases of over six windy days per year at 2090 under RCP8.5.",
	"Dry Days <1mm per day": "Under RCP4.5 at 2040, dry days increase in eastern areas, particularly in summer, and decrease along the west coast in spring. Under RCP8.5 at 2040, dry days are projected to increase through the centre and south of the region by up to 9 days, particularly in summer.<br>By 2090 under RCP4.5, over 12 more dry days are expected in the south Wairarapa region per year, and a general annual increase in dry days is shown across the region.  By 2090 under RCP8.5, over 12 more dry days are projected over virtually the entire Wellington Region, with up to 24 extra dry days in central-southern areas.<br> <br><A HREF='http://www.gw.govt.nz/assets/Climate-change/Climate-Change-and-Variability-report-Wlgtn-Regn-High-Res-with-Appendix.pdf#page=93' target='_blank'> See details in report.</a><br>",
	"Wet days over 1mm per day": "Projections of rain days (where daily rain >1 mm) are shown for 2040 and 2090, compared to 1995. The number of rain days is expected to decline across the Wellington Region under both RCP4.5 and RCP8.5 at 2040 and 2090.<br>By 2040 for RCP4.5, summer, autumn and winter are expected to have up to 5 fewer rain days across the whole region, with up to 10 fewer rain days per year expected in parts of the Wairarapa. <br>At 2090 under RCP4.5, all seasons show decreases in rain days of up to 5 days per season, which sums to 5 to 10 fewer rain days per year. <br>This pattern is similar for RCP8.5 at 2040, but at 2090 under RCP8.5 there are much more significant decreases, with 15-20 fewer rain days per year projected for some eastern areas.<br> <br><A HREF='http://www.gw.govt.nz/assets/Climate-change/Climate-Change-and-Variability-report-Wlgtn-Regn-High-Res-with-Appendix.pdf#page=82' target='_blank'> See details in report.</a><br>",
	"Wet days over 25mm per day": "For 2040 under RCP4.5, minor increases of up to 2 heavy rain days are projected across most of the region at the annual scale. For 2040 under RCP8.5, only minor variation in heavy rain days is projected.<br>For 2090 under RCP4.5, with small increases or decreases projected for different parts of the region, but overall the number of days increases at the annual scale. <br>For RCP8.5 at 2090, a small decrease in heavy rain days is limited to the eastern Tararua and Rimutaka Ranges, with most of the rest of the region projecting more heavy rain days per year or season.<br> <br><A HREF='http://www.gw.govt.nz/assets/Climate-change/Climate-Change-and-Variability-report-Wlgtn-Regn-High-Res-with-Appendix.pdf#page=87' target='_blank'> See details in report.</a><br>",
	"Total rainfall": "In general, rainfall is projected to increase in the west of the Wellington Region and decrease in the east of the region. <br>Under RCP4.5 at 2040, increases in annual rainfall of up to 5% are projected for most of the region. <br>Under RCP4.5 for 2090 , a larger drying signal is observed in the eastern part of the region, with up to 10% less spring rainfall projected for eastern hill country areas and 5% less rainfall projected for the remaining area particularly in spring, winter, and at the annual scale. Up to 5% more rainfall is projected in the western region for all four seasons, at the annual scale, and for the majority of the region in summer.<br>Similar rainfall patterns of change are seen for RCP8.5 at 2040 and 2090 as for RCP4.5, but these patterns are amplified relative to RCP4.5. At 2040, rainfall is projected to decrease in eastern parts of the region in spring, but only by up to 5%. Increases in rainfall are projected for the west and east coasts in autumn and for the east coast in summer (up to 10% increase). <br>For 2090, there is more of a drying signal across the eastern part of the region, with extensive areas projecting up to 10% less rainfall in the east for spring, summer and autumn, and also at the annual scale. <br> <br><A HREF='http://www.gw.govt.nz/assets/Climate-change/Climate-Change-and-Variability-report-Wlgtn-Regn-High-Res-with-Appendix.pdf#page=74' target='_blank'> See details in report.</a><br>",
	"99th percentile of daily rainfall": "A warmer atmosphere can hold more moisture, so there is potential for heavier extreme rainfall with global increases in temperatures under climate change. Under RCP4.5 at 2040, most areas are expected to receive a 5% increase in extreme daily precipitation.<br>By 2090 under RCP4.5, more high elevation areas are likely to receive up to 10% more extreme precipitation and east coast areas may receive up to 15% more extreme precipitation.<br>By 2090, most areas are likely to receive at least a 10-15% increase in extreme daily precipitation, with some coastal areas (especially around Wellington City) projected to receive more than a 25% increase in extreme precipitation.<br> <br><A HREF='http://www.gw.govt.nz/assets/Climate-change/Climate-Change-and-Variability-report-Wlgtn-Regn-High-Res-with-Appendix.pdf#page=97' target='_blank'> See details in report.</a><br>",
	"Growing degree days base 5C": "Growing degree-days (GDD) express the sum of daily temperatures above a selected base temperature (5˚C) that represent a threshold of plant growth. The calculation of growing degree days is useful to primary industry in terms of monitoring plant growth and planning harvests. The departure of mean daily temperature above a base temperature, which has been found to be critical to the growth or development of a particular plant, is a measure of the plant’s development on that day.<br> <br><A HREF='http://www.gw.govt.nz/assets/Climate-change/Climate-Change-and-Variability-report-Wlgtn-Regn-High-Res-with-Appendix.pdf#page=40' target='_blank'> See details in report.</a><br>",
	"Growing degree days base 10C": "Growing degree-days (GDD) express the sum of daily temperatures above a selected base temperature (10˚C) that represent a threshold of plant growth. The calculation of growing degree days is useful to primary industry in terms of monitoring plant growth and planning harvests. The departure of mean daily temperature above a base temperature, which has been found to be critical to the growth or development of a particular plant, is a measure of the plant’s development on that day.<br> <br><A HREF='http://www.gw.govt.nz/assets/Climate-change/Climate-Change-and-Variability-report-Wlgtn-Regn-High-Res-with-Appendix.pdf#page=69' target='_blank'> See details in report.</a><br>",
	"Hot days >25C": "High temperature extremes (i.e. ‘hot days’) are considered as the number of days per year where the max temperature is equal to or exceeds 25°C.<br>At 2040, eastern areas are projected to experience increases of about 10-20 days per year for RCP4.5 and 10-30 days for RCP8.5. For western areas, an increase of up to 10 hot days per year is projected.<br>At 2090 under RCP4.5, hot days are expected to increase by 30-40 days per year in the east. Western areas are projected to experience mostly 5-10 more hot days per year. Under RCP8.5 at 2090, large increases in the number of hot days across most of the region are projected. For central Wairarapa, the number of hot days is projected to increase by around 70 days per year.  Western areas are projected to experience an increase of around 30-40 days in lowlands, decreasing to 5 days per year for the highest elevations.<br> <br><A HREF='http://www.gw.govt.nz/assets/Climate-change/Climate-Change-and-Variability-report-Wlgtn-Regn-High-Res-with-Appendix.pdf#page=71' target='_blank'> See details in report.</a><br>",
	"Cold nights - decrease in days per year": "Projected change in cold nights is relative to 1995. The numbers in the legend refer to the decrease in the number of cold nights, e.g. parts of the Tararua Ranges are projected to experience up to 40 fewer cold nights per year by 2090 under RCP8.5 at 2090.Similar patterns are shown for changes in cold nights at 2040 under both RCP4.5 and RCP8.5. Most parts of the region outside the highest elevations of the Tararua Ranges are projected to experience a decrease of less than five cold nights per year. Under RCP8.5 at 2090, far fewer cold nights are projected for much of the region.<br> <br><A HREF='http://www.gw.govt.nz/assets/Climate-change/Climate-Change-and-Variability-report-Wlgtn-Regn-High-Res-with-Appendix.pdf#page=71' target='_blank'> See details in report.</a><br>",
	"Potential evapotranspiration deficit": "Annual PED indicates annual drought intensity. Potential evapotranspiration deficit (PED), in units of mm, can be thought of as the amount of rainfall needed in order to keep pastures growing at optimum levels. An increase in PED of 30 mm or more corresponds to an extra week of reduced grass growth.<br>Smaller increases in PED are projected for western parts of the region, and larger increases in PED are projected for the inland Wairarapa region. <br>By 2090 under RCP8.5, increases in PED of over 160 mm/year are projected for the area between Masterton and Martinborough, and further southwest of Martinborough. In all scenarios, the inland Wairarapa region is projected to experience the largest increase in PED compared with the baseline period. <br> <br><A HREF='http://www.gw.govt.nz/assets/Climate-change/Climate-Change-and-Variability-report-Wlgtn-Regn-High-Res-with-Appendix.pdf#page=137' target='_blank'> See details in report.</a><br>",
	"Potential evapotranspiration deficit (PED) days over 300mm": "Days of PED accumulation above 300mm indicates the length of drought.<br>The projections for the number of days where PED is greater than 300 mm show that the area around Martinborough is projected to experience the highest increase, with increases of more than 4 days per year projected at both time slices for both scenarios, and over 16 more days per year projected at 2090 under RCP8.5. <br>There is zero or a minimal change in the number of days with PED >300mm for most of the region, indicated by the blue shades (<4 days per year).<br> <br><A HREF='http://www.gw.govt.nz/assets/Climate-change/Climate-Change-and-Variability-report-Wlgtn-Regn-High-Res-with-Appendix.pdf#page=139' target='_blank'> See details in report.</a><br>",
	"Soil moisture deficit days": "Days of soil moisture deficit indicates decadal drought frequency.  Soil moisture deficit is calculated based on incoming daily rainfall (mm), outgoing daily potential evapotranspiration (PET), and a fixed available water capacity (the amount of water in the soil ‘reservoir’ that plants can use) of 150 mm.<br>SMD shows a change in pattern of where the driest soils are projected to be compared with PED. <br>At 2040 under RCP4.5 and RCP8.5, the largest increase in days of SMD is for the eastern slopes of the Ranges (around 12 days). Only small changes are projected for the Wairarapa in days of SMD at 2040 under both scenarios, and some areas are projected to experience small decreases. <br>At 2090 under RCP8.5, the largest increase in days of soil moisture deficit is observed in the northeast of the Wellington Region (>36 days). Much of the Wairarapa region is projected to experience an increase of more than 28 days of SMD. RCP4.5 at 2090 shows a similar pattern, albeit with a smaller increase in the number of days of SMD. <br> <br><A HREF='http://www.gw.govt.nz/assets/Climate-change/Climate-Change-and-Variability-report-Wlgtn-Regn-High-Res-with-Appendix.pdf#page=137' target='_blank'> See details in report.</a><br>",
	"Mean temperature": "By 2040 annual average temperatures are projected to increase by between about 0.7°C (RCP2.6) and 1.1°C (RCP8.5). Under RCP8.5 at 2040 warming of >0.5˚C is observed everywhere, and most of the region inland from the coastal margins is projected to warm by up to 1.25°C in autumn.<br>By 2090, annual average temperatures are projected to increase by between 0.7°C (RCP2.6) and 3.0°C (RCP8.5). <br>By 2090 under RCP8.5, significant warming is observed over the entire Wellington Region, with spring observing the least amount of warming and autumn observing the most. The area around and to the north and east of Masterton is projected to experience increases by more than 3.25°C in autumn. At the annual scale, minimum warming of 2.25°C is projected for the region.<br> <br><A HREF='http://www.gw.govt.nz/assets/Climate-change/Climate-Change-and-Variability-report-Wlgtn-Regn-High-Res-with-Appendix.pdf#page=50' target='_blank'> See details in report.</a><br>",
	"Mean min temp": "Projected changes in nighttime minimum temperature (Tmin) in deg C. Tmin is projected to increase by around 0.4 to 0.6°C for most of the region for the year as a whole at 2040 for both RCP4.5 and RCP8.5. Tmin is projected to increase by around 2.00-2.25°C for most of the region in spring, summer, and for the year as a whole at 2090 for RCP8.5. <br> <br><A HREF='http://www.gw.govt.nz/assets/Climate-change/Climate-Change-and-Variability-report-Wlgtn-Regn-High-Res-with-Appendix.pdf#page=61' target='_blank'> See details in report.</a><br>",
	"Mean max temp": "Projected changes in daytime maximum temperature (Tmax) in deg C. Tmax is projected to increase by around 0.75 to 1.25°C for most of the region for the year as a whole at 2040 for both RCP4.5 and RCP8.5. Tmax is projected to increase by over 3.25°C for most of the region for the year as a whole at 2090 for RCP8.5. <br> <br><A HREF='http://www.gw.govt.nz/assets/Climate-change/Climate-Change-and-Variability-report-Wlgtn-Regn-High-Res-with-Appendix.pdf#page=60' target='_blank'> See details in report.</a><br>",
	"Diurnal annual temp range": "The positive maximum temperature trends (Tmax) are larger than minimum temperature trends (Tmin), resulting in an increase in the diurnal temperature range (Trange). Eastern parts of the region expected to experience approximately 1.50°C increase in Trange for the year as whole by 2090 under RCP8.5. <br> <br><A HREF='http://www.gw.govt.nz/assets/Climate-change/Climate-Change-and-Variability-report-Wlgtn-Regn-High-Res-with-Appendix.pdf#page=65' target='_blank'> See details in report.</a><br>",
	"Snow days": "Changes in snow days have been estimated from the Regional Climate Model output. This was done by counting precipitation days where the mean temperature was below the freezing point. Modelled snow day frequency for 1986-2005 (current climatology) shows that the maximum amount of snow days experienced in the region is two days per year, in the highest elevations of the Tararua Ranges. <br> The number of snow days per year essentially reduces everywhere, with the largest reduction in the highest elevations of the Tararua Ranges.<br> <br><A HREF='http://www.gw.govt.nz/assets/Climate-change/Climate-Change-and-Variability-report-Wlgtn-Regn-High-Res-with-Appendix.pdf#page=96' target='_blank'> See details in report.</a><br>",
	"Solar radiation": "The geographic distribution of solar radiation depends not only on astronomical factors but also local rainfall (and cloudiness) patterns. Projected changes to solar radiation are consistent with increases and decreases in rainfall (and therefore cloudiness) for the Wellington Region. At the annual timescale, there is minimal change for RCP4.5 at 2040 and 2090, and for RCP8.5 at 2040. For RCP8.5 at 2090, central parts of the region are projected to experience up to 2% increase in solar radiation at the annual scale. <br> <br><A HREF='http://www.gw.govt.nz/assets/Climate-change/Climate-Change-and-Variability-report-Wlgtn-Regn-High-Res-with-Appendix.pdf#page=115' target='_blank'> See details in report.</a><br>",
	"Relative humidity": "For most parts of the Wellington Region, relative humidity is projected to slightly decline into the future, under both scenarios at both time periods, and at the annual and seasonal timescales. The only parts of the region to undergo (very small) increases of up to 1% are around the southern coast and Wellington City. <br> <br><A HREF='http://www.gw.govt.nz/assets/Climate-change/Climate-Change-and-Variability-report-Wlgtn-Regn-High-Res-with-Appendix.pdf#page=121' target='_blank'> See details in report.</a><br>"
};
///var serviceNames = ["Hazards","Events","Jobs"];
var serviceURL_root = 'http://services2.arcgis.com/RS7BXJAO6ksvblJm/arcgis/rest/services/';
//var serviceURL_suffix = '_test/FeatureServer/';
