import React, { useState } from "react";
import * as GC from "@grapecity/spread-sheets";
import "@grapecity/spread-sheets-print";
import "@grapecity/spread-sheets-shapes";
import "@grapecity/spread-sheets-slicers";
import "@grapecity/spread-sheets-pivot-addon";
import "@grapecity/spread-sheets-tablesheet";
import "@grapecity/spread-sheets-io";
import "@grapecity/spread-sheets-designer-resources-en";
import "@grapecity/spread-sheets-designer";
import { Designer } from "@grapecity/spread-sheets-designer-react";
import "@grapecity/spread-sheets-designer/styles/gc.spread.sheets.designer.min.css";
import "@grapecity/spread-sheets/styles/gc.spread.sheets.excel2013white.css";
import "./custom.css";
import * as ExcelIO from "@grapecity/spread-excelio";

// GC.Spread.Sheets.Designer.LicenseKey = "designer-component-distribution-key";
// const sjsLicense: string = "sjs-distribution-key";

export default function ActualSheet() {
  // const config: any = GC.Spread.Sheets.Designer.DefaultConfig;
  // config.commandMap = {
  //   Welcome: {
  //     title: "Welcome",
  //     text: "Welcome",
  //     iconClass: "ribbon-button-welcome",
  //     bigButton: "true",
  //     commandName: "Welcome",
  //     execute: async (
  //       context: any,
  //       propertyName: any,
  //       fontItalicChecked?: any
  //     ) => {
  //       alert("Welcome to new designer.");
  //     },
  //   },
  // };
  // config.ribbon[0].buttonGroups.unshift({
  //   label: "NewDesigner",
  //   thumbnailClass: "welcome",
  //   commandGroup: {
  //     children: [
  //       {
  //         direction: "vertical",
  //         commands: ["Welcome"],
  //       },
  //       // This is custom button ----------------end-------------
  //     ],
  //   },
  // });

  return (
    <div>
      <Designer
        styleInfo={{ width: "100%", height: "98vh" }}
        // config={config}
        spreadOptions={{ sheetCount: 2 }}
      />
    </div>
  );
}
