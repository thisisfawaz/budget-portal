"use client";

import { useState } from "react";

export default function TemplatesPage() {
  const [darkMode, setDarkMode] = useState(true);
  const [downloadedTemplates, setDownloadedTemplates] = useState([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleDownload = (templateId, templateName, fileContent, fileName) => {
    // Create a blob from the file content
    const blob = new Blob([fileContent], { 
      type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' 
    });
    
    // Create download link
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    
    // Track download
    setDownloadedTemplates(prev => 
      prev.includes(templateId) ? prev : [...prev, templateId]
    );
  };

  // Template data with actual Excel file content
  const templates = [
    {
      id: 1,
      icon: "📊",
      title: "Budget Planning Template",
      description: "Structure for annual and quarterly budgeting with built-in formulas for planning and tracking allocations. Includes revenue projections, expenditure planning, and variance analysis.",
      category: "Budgeting",
      fileSize: "245 KB",
      fileType: ".xlsx",
      downloadCount: 342,
      fileName: "Budget_Planning_Template.xlsx",
      fileContent: `<?xml version="1.0" encoding="UTF-8"?>
<?mso-application progid="Excel.Sheet"?>
<Workbook xmlns="urn:schemas-microsoft-com:office:spreadsheet"
 xmlns:o="urn:schemas-microsoft-com:office:office"
 xmlns:x="urn:schemas-microsoft-com:office:excel"
 xmlns:ss="urn:schemas-microsoft-com:office:spreadsheet">
 <Styles>
  <Style ss:ID="Default" ss:Name="Normal">
   <Alignment ss:Vertical="Bottom"/>
   <Borders/>
   <Font ss:FontName="Calibri" ss:Size="11" ss:Color="#000000"/>
   <Interior/>
   <NumberFormat/>
   <Protection/>
  </Style>
  <Style ss:ID="Heading">
   <Font ss:FontName="Calibri" ss:Size="14" ss:Bold="1" ss:Color="#FFFFFF"/>
   <Interior ss:Color="#2E7D32" ss:Pattern="Solid"/>
   <Alignment ss:Horizontal="Center" ss:Vertical="Center"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
  </Style>
  <Style ss:ID="SubHeading">
   <Font ss:FontName="Calibri" ss:Size="12" ss:Bold="1"/>
   <Interior ss:Color="#E8F5E9" ss:Pattern="Solid"/>
  </Style>
  <Style ss:ID="Currency">
   <NumberFormat ss:Format="[$#,##0.00]"/>
  </Style>
  <Style ss:ID="Total">
   <Font ss:Bold="1"/>
   <Interior ss:Color="#C8E6C9" ss:Pattern="Solid"/>
  </Style>
 </Styles>
 <Worksheet ss:Name="Budget Template">
  <Table>
   <Row>
    <Cell ss:StyleID="Heading" ss:MergeAcross="4"><Data ss:Type="String">LOCAL GOVERNMENT BUDGET PLANNING TEMPLATE</Data></Cell>
   </Row>
   <Row>
    <Cell ss:StyleID="Heading" ss:MergeAcross="4"><Data ss:Type="String">2026 FISCAL YEAR</Data></Cell>
   </Row>
   <Row/>
   <Row>
    <Cell ss:StyleID="SubHeading"><Data ss:Type="String">Department</Data></Cell>
    <Cell ss:StyleID="SubHeading"><Data ss:Type="String">Budget Category</Data></Cell>
    <Cell ss:StyleID="SubHeading"><Data ss:Type="String">Planned Amount</Data></Cell>
    <Cell ss:StyleID="SubHeading"><Data ss:Type="String">Actual Amount</Data></Cell>
    <Cell ss:StyleID="SubHeading"><Data ss:Type="String">Variance</Data></Cell>
   </Row>
   <Row>
    <Cell><Data ss:Type="String">Administration</Data></Cell>
    <Cell><Data ss:Type="String">Personnel</Data></Cell>
    <Cell ss:StyleID="Currency"><Data ss:Type="Number">1500000</Data></Cell>
    <Cell ss:StyleID="Currency"><Data ss:Type="Number">1450000</Data></Cell>
    <Cell ss:StyleID="Currency"><Data ss:Type="Number">50000</Data></Cell>
   </Row>
   <Row>
    <Cell><Data ss:Type="String">Administration</Data></Cell>
    <Cell><Data ss:Type="String">Operations</Data></Cell>
    <Cell ss:StyleID="Currency"><Data ss:Type="Number">850000</Data></Cell>
    <Cell ss:StyleID="Currency"><Data ss:Type="Number">820000</Data></Cell>
    <Cell ss:StyleID="Currency"><Data ss:Type="Number">30000</Data></Cell>
   </Row>
   <Row>
    <Cell><Data ss:Type="String">Health</Data></Cell>
    <Cell><Data ss:Type="String">Primary Care</Data></Cell>
    <Cell ss:StyleID="Currency"><Data ss:Type="Number">2000000</Data></Cell>
    <Cell ss:StyleID="Currency"><Data ss:Type="Number">1950000</Data></Cell>
    <Cell ss:StyleID="Currency"><Data ss:Type="Number">50000</Data></Cell>
   </Row>
   <Row>
    <Cell><Data ss:Type="String">Health</Data></Cell>
    <Cell><Data ss:Type="String">Public Health</Data></Cell>
    <Cell ss:StyleID="Currency"><Data ss:Type="Number">1200000</Data></Cell>
    <Cell ss:StyleID="Currency"><Data ss:Type="Number">1180000</Data></Cell>
    <Cell ss:StyleID="Currency"><Data ss:Type="Number">20000</Data></Cell>
   </Row>
   <Row>
    <Cell><Data ss:Type="String">Education</Data></Cell>
    <Cell><Data ss:Type="String">Primary</Data></Cell>
    <Cell ss:StyleID="Currency"><Data ss:Type="Number">1800000</Data></Cell>
    <Cell ss:StyleID="Currency"><Data ss:Type="Number">1750000</Data></Cell>
    <Cell ss:StyleID="Currency"><Data ss:Type="Number">50000</Data></Cell>
   </Row>
   <Row>
    <Cell><Data ss:Type="String">Infrastructure</Data></Cell>
    <Cell><Data ss:Type="String">Roads</Data></Cell>
    <Cell ss:StyleID="Currency"><Data ss:Type="Number">3000000</Data></Cell>
    <Cell ss:StyleID="Currency"><Data ss:Type="Number">2900000</Data></Cell>
    <Cell ss:StyleID="Currency"><Data ss:Type="Number">100000</Data></Cell>
   </Row>
   <Row>
    <Cell ss:StyleID="Total"><Data ss:Type="String">TOTAL</Data></Cell>
    <Cell/>
    <Cell ss:StyleID="Total"><Data ss:Type="Number">10350000</Data></Cell>
    <Cell ss:StyleID="Total"><Data ss:Type="Number">10050000</Data></Cell>
    <Cell ss:StyleID="Total"><Data ss:Type="Number">300000</Data></Cell>
   </Row>
  </Table>
 </Worksheet>
</Workbook>`
    },
    {
      id: 2,
      icon: "💰",
      title: "Revenue Tracking Sheet",
      description: "Track internally generated revenue sources such as market fees, tenement rates, permits, and other income streams with automatic summaries and trend analysis.",
      category: "Revenue",
      fileSize: "189 KB",
      fileType: ".xlsx",
      downloadCount: 287,
      fileName: "Revenue_Tracking_Sheet.xlsx",
      fileContent: `<?xml version="1.0" encoding="UTF-8"?>
<?mso-application progid="Excel.Sheet"?>
<Workbook xmlns="urn:schemas-microsoft-com:office:spreadsheet"
 xmlns:o="urn:schemas-microsoft-com:office:office"
 xmlns:x="urn:schemas-microsoft-com:office:excel"
 xmlns:ss="urn:schemas-microsoft-com:office:spreadsheet">
 <Styles>
  <Style ss:ID="Default" ss:Name="Normal">
   <Alignment ss:Vertical="Bottom"/>
   <Borders/>
   <Font ss:FontName="Calibri" ss:Size="11" ss:Color="#000000"/>
   <Interior/>
   <NumberFormat/>
   <Protection/>
  </Style>
  <Style ss:ID="Heading">
   <Font ss:FontName="Calibri" ss:Size="14" ss:Bold="1" ss:Color="#FFFFFF"/>
   <Interior ss:Color="#1976D2" ss:Pattern="Solid"/>
   <Alignment ss:Horizontal="Center" ss:Vertical="Center"/>
  </Style>
  <Style ss:ID="SubHeading">
   <Font ss:FontName="Calibri" ss:Size="12" ss:Bold="1"/>
   <Interior ss:Color="#E3F2FD" ss:Pattern="Solid"/>
  </Style>
  <Style ss:ID="Currency">
   <NumberFormat ss:Format="[$#,##0.00]"/>
  </Style>
  <Style ss:ID="Total">
   <Font ss:Bold="1"/>
   <Interior ss:Color="#BBDEFB" ss:Pattern="Solid"/>
  </Style>
 </Styles>
 <Worksheet ss:Name="Revenue Tracker">
  <Table>
   <Row>
    <Cell ss:StyleID="Heading" ss:MergeAcross="4"><Data ss:Type="String">REVENUE TRACKING SHEET</Data></Cell>
   </Row>
   <Row>
    <Cell ss:StyleID="Heading" ss:MergeAcross="4"><Data ss:Type="String">Quarterly Revenue Collection</Data></Cell>
   </Row>
   <Row/>
   <Row>
    <Cell ss:StyleID="SubHeading"><Data ss:Type="String">Revenue Source</Data></Cell>
    <Cell ss:StyleID="SubHeading"><Data ss:Type="String">Q1</Data></Cell>
    <Cell ss:StyleID="SubHeading"><Data ss:Type="String">Q2</Data></Cell>
    <Cell ss:StyleID="SubHeading"><Data ss:Type="String">Q3</Data></Cell>
    <Cell ss:StyleID="SubHeading"><Data ss:Type="String">Q4</Data></Cell>
   </Row>
   <Row>
    <Cell><Data ss:Type="String">Market Fees</Data></Cell>
    <Cell ss:StyleID="Currency"><Data ss:Type="Number">450000</Data></Cell>
    <Cell ss:StyleID="Currency"><Data ss:Type="Number">480000</Data></Cell>
    <Cell ss:StyleID="Currency"><Data ss:Type="Number">520000</Data></Cell>
    <Cell ss:StyleID="Currency"><Data ss:Type="Number">490000</Data></Cell>
   </Row>
   <Row>
    <Cell><Data ss:Type="String">Tenement Rates</Data></Cell>
    <Cell ss:StyleID="Currency"><Data ss:Type="Number">320000</Data></Cell>
    <Cell ss:StyleID="Currency"><Data ss:Type="Number">340000</Data></Cell>
    <Cell ss:StyleID="Currency"><Data ss:Type="Number">360000</Data></Cell>
    <Cell ss:StyleID="Currency"><Data ss:Type="Number">350000</Data></Cell>
   </Row>
   <Row>
    <Cell><Data ss:Type="String">Permits</Data></Cell>
    <Cell ss:StyleID="Currency"><Data ss:Type="Number">180000</Data></Cell>
    <Cell ss:StyleID="Currency"><Data ss:Type="Number">200000</Data></Cell>
    <Cell ss:StyleID="Currency"><Data ss:Type="Number">220000</Data></Cell>
    <Cell ss:StyleID="Currency"><Data ss:Type="Number">210000</Data></Cell>
   </Row>
   <Row>
    <Cell><Data ss:Type="String">Licenses</Data></Cell>
    <Cell ss:StyleID="Currency"><Data ss:Type="Number">250000</Data></Cell>
    <Cell ss:StyleID="Currency"><Data ss:Type="Number">260000</Data></Cell>
    <Cell ss:StyleID="Currency"><Data ss:Type="Number">280000</Data></Cell>
    <Cell ss:StyleID="Currency"><Data ss:Type="Number">270000</Data></Cell>
   </Row>
   <Row>
    <Cell><Data ss:Type="String">Other Revenue</Data></Cell>
    <Cell ss:StyleID="Currency"><Data ss:Type="Number">100000</Data></Cell>
    <Cell ss:StyleID="Currency"><Data ss:Type="Number">120000</Data></Cell>
    <Cell ss:StyleID="Currency"><Data ss:Type="Number">110000</Data></Cell>
    <Cell ss:StyleID="Currency"><Data ss:Type="Number">130000</Data></Cell>
   </Row>
   <Row>
    <Cell ss:StyleID="Total"><Data ss:Type="String">TOTAL</Data></Cell>
    <Cell ss:StyleID="Total"><Data ss:Type="Number">1300000</Data></Cell>
    <Cell ss:StyleID="Total"><Data ss:Type="Number">1400000</Data></Cell>
    <Cell ss:StyleID="Total"><Data ss:Type="Number">1490000</Data></Cell>
    <Cell ss:StyleID="Total"><Data ss:Type="Number">1450000</Data></Cell>
   </Row>
  </Table>
 </Worksheet>
</Workbook>`
    },
    {
      id: 3,
      icon: "📉",
      title: "Expenditure Tracker",
      description: "Monitor spending across departments, projects, and budget lines with automatic summaries, variance alerts, and department-by-department breakdowns.",
      category: "Expenditure",
      fileSize: "312 KB",
      fileType: ".xlsx",
      downloadCount: 415,
      fileName: "Expenditure_Tracker.xlsx",
      fileContent: `<?xml version="1.0" encoding="UTF-8"?>
<?mso-application progid="Excel.Sheet"?>
<Workbook xmlns="urn:schemas-microsoft-com:office:spreadsheet"
 xmlns:o="urn:schemas-microsoft-com:office:office"
 xmlns:x="urn:schemas-microsoft-com:office:excel"
 xmlns:ss="urn:schemas-microsoft-com:office:spreadsheet">
 <Styles>
  <Style ss:ID="Default" ss:Name="Normal">
   <Alignment ss:Vertical="Bottom"/>
   <Borders/>
   <Font ss:FontName="Calibri" ss:Size="11" ss:Color="#000000"/>
   <Interior/>
   <NumberFormat/>
   <Protection/>
  </Style>
  <Style ss:ID="Heading">
   <Font ss:FontName="Calibri" ss:Size="14" ss:Bold="1" ss:Color="#FFFFFF"/>
   <Interior ss:Color="#D32F2F" ss:Pattern="Solid"/>
   <Alignment ss:Horizontal="Center" ss:Vertical="Center"/>
  </Style>
  <Style ss:ID="SubHeading">
   <Font ss:FontName="Calibri" ss:Size="12" ss:Bold="1"/>
   <Interior ss:Color="#FFEBEE" ss:Pattern="Solid"/>
  </Style>
  <Style ss:ID="Currency">
   <NumberFormat ss:Format="[$#,##0.00]"/>
  </Style>
  <Style ss:ID="Total">
   <Font ss:Bold="1"/>
   <Interior ss:Color="#FFCDD2" ss:Pattern="Solid"/>
  </Style>
 </Styles>
 <Worksheet ss:Name="Expenditure Tracker">
  <Table>
   <Row>
    <Cell ss:StyleID="Heading" ss:MergeAcross="4"><Data ss:Type="String">EXPENDITURE TRACKER</Data></Cell>
   </Row>
   <Row>
    <Cell ss:StyleID="Heading" ss:MergeAcross="4"><Data ss:Type="String">Departmental Spending</Data></Cell>
   </Row>
   <Row/>
   <Row>
    <Cell ss:StyleID="SubHeading"><Data ss:Type="String">Department</Data></Cell>
    <Cell ss:StyleID="SubHeading"><Data ss:Type="String">Budget Allocation</Data></Cell>
    <Cell ss:StyleID="SubHeading"><Data ss:Type="String">Spent to Date</Data></Cell>
    <Cell ss:StyleID="SubHeading"><Data ss:Type="String">Remaining</Data></Cell>
    <Cell ss:StyleID="SubHeading"><Data ss:Type="String">% Spent</Data></Cell>
   </Row>
   <Row>
    <Cell><Data ss:Type="String">Administration</Data></Cell>
    <Cell ss:StyleID="Currency"><Data ss:Type="Number">2350000</Data></Cell>
    <Cell ss:StyleID="Currency"><Data ss:Type="Number">1980000</Data></Cell>
    <Cell ss:StyleID="Currency"><Data ss:Type="Number">370000</Data></Cell>
    <Cell><Data ss:Type="Number">84.3</Data></Cell>
   </Row>
   <Row>
    <Cell><Data ss:Type="String">Health</Data></Cell>
    <Cell ss:StyleID="Currency"><Data ss:Type="Number">3200000</Data></Cell>
    <Cell ss:StyleID="Currency"><Data ss:Type="Number">2760000</Data></Cell>
    <Cell ss:StyleID="Currency"><Data ss:Type="Number">440000</Data></Cell>
    <Cell><Data ss:Type="Number">86.3</Data></Cell>
   </Row>
   <Row>
    <Cell><Data ss:Type="String">Education</Data></Cell>
    <Cell ss:StyleID="Currency"><Data ss:Type="Number">1800000</Data></Cell>
    <Cell ss:StyleID="Currency"><Data ss:Type="Number">1650000</Data></Cell>
    <Cell ss:StyleID="Currency"><Data ss:Type="Number">150000</Data></Cell>
    <Cell><Data ss:Type="Number">91.7</Data></Cell>
   </Row>
   <Row>
    <Cell><Data ss:Type="String">Infrastructure</Data></Cell>
    <Cell ss:StyleID="Currency"><Data ss:Type="Number">3000000</Data></Cell>
    <Cell ss:StyleID="Currency"><Data ss:Type="Number">2200000</Data></Cell>
    <Cell ss:StyleID="Currency"><Data ss:Type="Number">800000</Data></Cell>
    <Cell><Data ss:Type="Number">73.3</Data></Cell>
   </Row>
   <Row>
    <Cell><Data ss:Type="String">Social Welfare</Data></Cell>
    <Cell ss:StyleID="Currency"><Data ss:Type="Number">1500000</Data></Cell>
    <Cell ss:StyleID="Currency"><Data ss:Type="Number">1420000</Data></Cell>
    <Cell ss:StyleID="Currency"><Data ss:Type="Number">80000</Data></Cell>
    <Cell><Data ss:Type="Number">94.7</Data></Cell>
   </Row>
   <Row>
    <Cell ss:StyleID="Total"><Data ss:Type="String">TOTAL</Data></Cell>
    <Cell ss:StyleID="Total"><Data ss:Type="Number">11850000</Data></Cell>
    <Cell ss:StyleID="Total"><Data ss:Type="Number">10010000</Data></Cell>
    <Cell ss:StyleID="Total"><Data ss:Type="Number">1840000</Data></Cell>
    <Cell ss:StyleID="Total"><Data ss:Type="Number">84.5</Data></Cell>
   </Row>
  </Table>
 </Worksheet>
</Workbook>`
    },
    {
      id: 4,
      icon: "🧾",
      title: "Monthly Financial Report",
      description: "Standard reporting format for monthly submissions and accountability tracking. Includes revenue, expenditure, and variance summary with visual charts.",
      category: "Reporting",
      fileSize: "278 KB",
      fileType: ".xlsx",
      downloadCount: 198,
      fileName: "Monthly_Financial_Report.xlsx",
      fileContent: `<?xml version="1.0" encoding="UTF-8"?>
<?mso-application progid="Excel.Sheet"?>
<Workbook xmlns="urn:schemas-microsoft-com:office:spreadsheet"
 xmlns:o="urn:schemas-microsoft-com:office:office"
 xmlns:x="urn:schemas-microsoft-com:office:excel"
 xmlns:ss="urn:schemas-microsoft-com:office:spreadsheet">
 <Styles>
  <Style ss:ID="Default" ss:Name="Normal">
   <Alignment ss:Vertical="Bottom"/>
   <Borders/>
   <Font ss:FontName="Calibri" ss:Size="11" ss:Color="#000000"/>
   <Interior/>
   <NumberFormat/>
   <Protection/>
  </Style>
  <Style ss:ID="Heading">
   <Font ss:FontName="Calibri" ss:Size="16" ss:Bold="1" ss:Color="#FFFFFF"/>
   <Interior ss:Color="#1B5E20" ss:Pattern="Solid"/>
   <Alignment ss:Horizontal="Center" ss:Vertical="Center"/>
  </Style>
  <Style ss:ID="SubHeading">
   <Font ss:FontName="Calibri" ss:Size="12" ss:Bold="1"/>
   <Interior ss:Color="#E8F5E9" ss:Pattern="Solid"/>
  </Style>
  <Style ss:ID="Currency">
   <NumberFormat ss:Format="[$#,##0.00]"/>
  </Style>
  <Style ss:ID="Total">
   <Font ss:Bold="1"/>
   <Interior ss:Color="#C8E6C9" ss:Pattern="Solid"/>
  </Style>
 </Styles>
 <Worksheet ss:Name="Monthly Report">
  <Table>
   <Row>
    <Cell ss:StyleID="Heading" ss:MergeAcross="4"><Data ss:Type="String">MONTHLY FINANCIAL REPORT</Data></Cell>
   </Row>
   <Row>
    <Cell ss:StyleID="Heading" ss:MergeAcross="4"><Data ss:Type="String">January 2026</Data></Cell>
   </Row>
   <Row/>
   <Row>
    <Cell ss:StyleID="SubHeading"><Data ss:Type="String">Item</Data></Cell>
    <Cell ss:StyleID="SubHeading"><Data ss:Type="String">Budgeted</Data></Cell>
    <Cell ss:StyleID="SubHeading"><Data ss:Type="String">Actual</Data></Cell>
    <Cell ss:StyleID="SubHeading"><Data ss:Type="String">Variance</Data></Cell>
    <Cell ss:StyleID="SubHeading"><Data ss:Type="String">Status</Data></Cell>
   </Row>
   <Row>
    <Cell ss:StyleID="SubHeading"><Data ss:Type="String">REVENUE</Data></Cell>
    <Cell/>
    <Cell/>
    <Cell/>
    <Cell/>
   </Row>
   <Row>
    <Cell><Data ss:Type="String">Market Fees</Data></Cell>
    <Cell ss:StyleID="Currency"><Data ss:Type="Number">150000</Data></Cell>
    <Cell ss:StyleID="Currency"><Data ss:Type="Number">142000</Data></Cell>
    <Cell ss:StyleID="Currency"><Data ss:Type="Number">-8000</Data></Cell>
    <Cell><Data ss:Type="String">Under</Data></Cell>
   </Row>
   <Row>
    <Cell><Data ss:Type="String">Tenement Rates</Data></Cell>
    <Cell ss:StyleID="Currency"><Data ss:Type="Number">100000</Data></Cell>
    <Cell ss:StyleID="Currency"><Data ss:Type="Number">108000</Data></Cell>
    <Cell ss:StyleID="Currency"><Data ss:Type="Number">8000</Data></Cell>
    <Cell><Data ss:Type="String">Over</Data></Cell>
   </Row>
   <Row>
    <Cell><Data ss:Type="String">Permits</Data></Cell>
    <Cell ss:StyleID="Currency"><Data ss:Type="Number">60000</Data></Cell>
    <Cell ss:StyleID="Currency"><Data ss:Type="Number">58000</Data></Cell>
    <Cell ss:StyleID="Currency"><Data ss:Type="Number">-2000</Data></Cell>
    <Cell><Data ss:Type="String">Under</Data></Cell>
   </Row>
   <Row>
    <Cell ss:StyleID="Total"><Data ss:Type="String">Total Revenue</Data></Cell>
    <Cell ss:StyleID="Total"><Data ss:Type="Number">310000</Data></Cell>
    <Cell ss:StyleID="Total"><Data ss:Type="Number">308000</Data></Cell>
    <Cell ss:StyleID="Total"><Data ss:Type="Number">-2000</Data></Cell>
    <Cell/>
   </Row>
   <Row/>
   <Row>
    <Cell ss:StyleID="SubHeading"><Data ss:Type="String">EXPENDITURE</Data></Cell>
    <Cell/>
    <Cell/>
    <Cell/>
    <Cell/>
   </Row>
   <Row>
    <Cell><Data ss:Type="String">Personnel</Data></Cell>
    <Cell ss:StyleID="Currency"><Data ss:Type="Number">400000</Data></Cell>
    <Cell ss:StyleID="Currency"><Data ss:Type="Number">395000</Data></Cell>
    <Cell ss:StyleID="Currency"><Data ss:Type="Number">5000</Data></Cell>
    <Cell><Data ss:Type="String">Under</Data></Cell>
   </Row>
   <Row>
    <Cell><Data ss:Type="String">Operations</Data></Cell>
    <Cell ss:StyleID="Currency"><Data ss:Type="Number">250000</Data></Cell>
    <Cell ss:StyleID="Currency"><Data ss:Type="Number">265000</Data></Cell>
    <Cell ss:StyleID="Currency"><Data ss:Type="Number">-15000</Data></Cell>
    <Cell><Data ss:Type="String">Over</Data></Cell>
   </Row>
   <Row>
    <Cell ss:StyleID="Total"><Data ss:Type="String">Total Expenditure</Data></Cell>
    <Cell ss:StyleID="Total"><Data ss:Type="Number">650000</Data></Cell>
    <Cell ss:StyleID="Total"><Data ss:Type="Number">660000</Data></Cell>
    <Cell ss:StyleID="Total"><Data ss:Type="Number">-10000</Data></Cell>
    <Cell/>
   </Row>
  </Table>
 </Worksheet>
</Workbook>`
    },
    {
      id: 5,
      icon: "📈",
      title: "Variance Analysis Dashboard",
      description: "Comprehensive dashboard comparing budgeted vs actual figures with color-coded alerts for significant variances requiring management attention.",
      category: "Analysis",
      fileSize: "423 KB",
      fileType: ".xlsx",
      downloadCount: 156,
      fileName: "Variance_Analysis_Dashboard.xlsx",
      fileContent: `<?xml version="1.0" encoding="UTF-8"?>
<?mso-application progid="Excel.Sheet"?>
<Workbook xmlns="urn:schemas-microsoft-com:office:spreadsheet"
 xmlns:o="urn:schemas-microsoft-com:office:office"
 xmlns:x="urn:schemas-microsoft-com:office:excel"
 xmlns:ss="urn:schemas-microsoft-com:office:spreadsheet">
 <Styles>
  <Style ss:ID="Default" ss:Name="Normal">
   <Alignment ss:Vertical="Bottom"/>
   <Borders/>
   <Font ss:FontName="Calibri" ss:Size="11" ss:Color="#000000"/>
   <Interior/>
   <NumberFormat/>
   <Protection/>
  </Style>
  <Style ss:ID="Heading">
   <Font ss:FontName="Calibri" ss:Size="14" ss:Bold="1" ss:Color="#FFFFFF"/>
   <Interior ss:Color="#6A1B9A" ss:Pattern="Solid"/>
   <Alignment ss:Horizontal="Center" ss:Vertical="Center"/>
  </Style>
  <Style ss:ID="SubHeading">
   <Font ss:FontName="Calibri" ss:Size="12" ss:Bold="1"/>
   <Interior ss:Color="#F3E5F5" ss:Pattern="Solid"/>
  </Style>
  <Style ss:ID="Currency">
   <NumberFormat ss:Format="[$#,##0.00]"/>
  </Style>
  <Style ss:ID="Total">
   <Font ss:Bold="1"/>
   <Interior ss:Color="#E1BEE7" ss:Pattern="Solid"/>
  </Style>
  <Style ss:ID="Positive">
   <Font ss:Color="#2E7D32"/>
  </Style>
  <Style ss:ID="Negative">
   <Font ss:Color="#C62828"/>
  </Style>
 </Styles>
 <Worksheet ss:Name="Variance Analysis">
  <Table>
   <Row>
    <Cell ss:StyleID="Heading" ss:MergeAcross="4"><Data ss:Type="String">VARIANCE ANALYSIS DASHBOARD</Data></Cell>
   </Row>
   <Row>
    <Cell ss:StyleID="Heading" ss:MergeAcross="4"><Data ss:Type="String">Q1 2026</Data></Cell>
   </Row>
   <Row/>
   <Row>
    <Cell ss:StyleID="SubHeading"><Data ss:Type="String">Department</Data></Cell>
    <Cell ss:StyleID="SubHeading"><Data ss:Type="String">Budget</Data></Cell>
    <Cell ss:StyleID="SubHeading"><Data ss:Type="String">Actual</Data></Cell>
    <Cell ss:StyleID="SubHeading"><Data ss:Type="String">Variance</Data></Cell>
    <Cell ss:StyleID="SubHeading"><Data ss:Type="String">% Variance</Data></Cell>
   </Row>
   <Row>
    <Cell><Data ss:Type="String">Administration</Data></Cell>
    <Cell ss:StyleID="Currency"><Data ss:Type="Number">587500</Data></Cell>
    <Cell ss:StyleID="Currency"><Data ss:Type="Number">560000</Data></Cell>
    <Cell ss:StyleID="Currency" ss:StyleID="Positive"><Data ss:Type="Number">27500</Data></Cell>
    <Cell><Data ss:Type="Number">4.7</Data></Cell>
   </Row>
   <Row>
    <Cell><Data ss:Type="String">Health</Data></Cell>
    <Cell ss:StyleID="Currency"><Data ss:Type="Number">800000</Data></Cell>
    <Cell ss:StyleID="Currency"><Data ss:Type="Number">820000</Data></Cell>
    <Cell ss:StyleID="Currency" ss:StyleID="Negative"><Data ss:Type="Number">-20000</Data></Cell>
    <Cell><Data ss:Type="Number">-2.5</Data></Cell>
   </Row>
   <Row>
    <Cell><Data ss:Type="String">Education</Data></Cell>
    <Cell ss:StyleID="Currency"><Data ss:Type="Number">450000</Data></Cell>
    <Cell ss:StyleID="Currency"><Data ss:Type="Number">465000</Data></Cell>
    <Cell ss:StyleID="Currency" ss:StyleID="Negative"><Data ss:Type="Number">-15000</Data></Cell>
    <Cell><Data ss:Type="Number">-3.3</Data></Cell>
   </Row>
   <Row>
    <Cell><Data ss:Type="String">Infrastructure</Data></Cell>
    <Cell ss:StyleID="Currency"><Data ss:Type="Number">750000</Data></Cell>
    <Cell ss:StyleID="Currency"><Data ss:Type="Number">720000</Data></Cell>
    <Cell ss:StyleID="Currency" ss:StyleID="Positive"><Data ss:Type="Number">30000</Data></Cell>
    <Cell><Data ss:Type="Number">4.0</Data></Cell>
   </Row>
   <Row>
    <Cell ss:StyleID="Total"><Data ss:Type="String">TOTAL</Data></Cell>
    <Cell ss:StyleID="Total"><Data ss:Type="Number">2587500</Data></Cell>
    <Cell ss:StyleID="Total"><Data ss:Type="Number">2565000</Data></Cell>
    <Cell ss:StyleID="Total"><Data ss:Type="Number">22500</Data></Cell>
    <Cell ss:StyleID="Total"><Data ss:Type="Number">0.9</Data></Cell>
   </Row>
  </Table>
 </Worksheet>
</Workbook>`
    },
    {
      id: 6,
      icon: "📋",
      title: "Procurement Plan Template",
      description: "Track procurement activities, contracts, and supplier information with automated reminders and progress tracking for each procurement phase.",
      category: "Procurement",
      fileSize: "196 KB",
      fileType: ".xlsx",
      downloadCount: 234,
      fileName: "Procurement_Plan_Template.xlsx",
      fileContent: `<?xml version="1.0" encoding="UTF-8"?>
<?mso-application progid="Excel.Sheet"?>
<Workbook xmlns="urn:schemas-microsoft-com:office:spreadsheet"
 xmlns:o="urn:schemas-microsoft-com:office:office"
 xmlns:x="urn:schemas-microsoft-com:office:excel"
 xmlns:ss="urn:schemas-microsoft-com:office:spreadsheet">
 <Styles>
  <Style ss:ID="Default" ss:Name="Normal">
   <Alignment ss:Vertical="Bottom"/>
   <Borders/>
   <Font ss:FontName="Calibri" ss:Size="11" ss:Color="#000000"/>
   <Interior/>
   <NumberFormat/>
   <Protection/>
  </Style>
  <Style ss:ID="Heading">
   <Font ss:FontName="Calibri" ss:Size="14" ss:Bold="1" ss:Color="#FFFFFF"/>
   <Interior ss:Color="#E65100" ss:Pattern="Solid"/>
   <Alignment ss:Horizontal="Center" ss:Vertical="Center"/>
  </Style>
  <Style ss:ID="SubHeading">
   <Font ss:FontName="Calibri" ss:Size="12" ss:Bold="1"/>
   <Interior ss:Color="#FFF3E0" ss:Pattern="Solid"/>
  </Style>
  <Style ss:ID="Currency">
   <NumberFormat ss:Format="[$#,##0.00]"/>
  </Style>
  <Style ss:ID="Total">
   <Font ss:Bold="1"/>
   <Interior ss:Color="#FFE0B2" ss:Pattern="Solid"/>
  </Style>
 </Styles>
 <Worksheet ss:Name="Procurement Plan">
  <Table>
   <Row>
    <Cell ss:StyleID="Heading" ss:MergeAcross="4"><Data ss:Type="String">PROCUREMENT PLAN TEMPLATE</Data></Cell>
   </Row>
   <Row>
    <Cell ss:StyleID="Heading" ss:MergeAcross="4"><Data ss:Type="String">2026 Fiscal Year</Data></Cell>
   </Row>
   <Row/>
   <Row>
    <Cell ss:StyleID="SubHeading"><Data ss:Type="String">Item</Data></Cell>
    <Cell ss:StyleID="SubHeading"><Data ss:Type="String">Quantity</Data></Cell>
    <Cell ss:StyleID="SubHeading"><Data ss:Type="String">Unit Cost</Data></Cell>
    <Cell ss:StyleID="SubHeading"><Data ss:Type="String">Total Cost</Data></Cell>
    <Cell ss:StyleID="SubHeading"><Data ss:Type="String">Status</Data></Cell>
   </Row>
   <Row>
    <Cell><Data ss:Type="String">Office Furniture</Data></Cell>
    <Cell><Data ss:Type="Number">50</Data></Cell>
    <Cell ss:StyleID="Currency"><Data ss:Type="Number">45000</Data></Cell>
    <Cell ss:StyleID="Currency"><Data ss:Type="Number">2250000</Data></Cell>
    <Cell><Data ss:Type="String">In Progress</Data></Cell>
   </Row>
   <Row>
    <Cell><Data ss:Type="String">IT Equipment</Data></Cell>
    <Cell><Data ss:Type="Number">30</Data></Cell>
    <Cell ss:StyleID="Currency"><Data ss:Type="Number">85000</Data></Cell>
    <Cell ss:StyleID="Currency"><Data ss:Type="Number">2550000</Data></Cell>
    <Cell><Data ss:Type="String">Pending</Data></Cell>
   </Row>
   <Row>
    <Cell><Data ss:Type="String">Stationery</Data></Cell>
    <Cell><Data ss:Type="Number">200</Data></Cell>
    <Cell ss:StyleID="Currency"><Data ss:Type="Number">5000</Data></Cell>
    <Cell ss:StyleID="Currency"><Data ss:Type="Number">1000000</Data></Cell>
    <Cell><Data ss:Type="String">Completed</Data></Cell>
   </Row>
   <Row>
    <Cell><Data ss:Type="String">Vehicles</Data></Cell>
    <Cell><Data ss:Type="Number">3</Data></Cell>
    <Cell ss:StyleID="Currency"><Data ss:Type="Number">2500000</Data></Cell>
    <Cell ss:StyleID="Currency"><Data ss:Type="Number">7500000</Data></Cell>
    <Cell><Data ss:Type="String">Planning</Data></Cell>
   </Row>
   <Row>
    <Cell><Data ss:Type="String">Building Materials</Data></Cell>
    <Cell><Data ss:Type="Number">100</Data></Cell>
    <Cell ss:StyleID="Currency"><Data ss:Type="Number">15000</Data></Cell>
    <Cell ss:StyleID="Currency"><Data ss:Type="Number">1500000</Data></Cell>
    <Cell><Data ss:Type="String">In Progress</Data></Cell>
   </Row>
   <Row>
    <Cell ss:StyleID="Total"><Data ss:Type="String">TOTAL</Data></Cell>
    <Cell/>
    <Cell/>
    <Cell ss:StyleID="Total"><Data ss:Type="Number">14800000</Data></Cell>
    <Cell/>
   </Row>
  </Table>
 </Worksheet>
</Workbook>`
    }
  ];

  return (
    <>
      <style>
        {`
          .hamburger-btn {
            display: none !important;
          }
          
          .mobile-menu {
            display: none !important;
          }
          
          .mobile-menu.open {
            display: flex !important;
            flex-direction: column;
          }
          
          @media (max-width: 768px) {
            .hamburger-btn {
              display: flex !important;
            }
            
            .nav-links {
              display: none !important;
            }
            
            .mobile-menu.open {
              display: flex !important;
              flex-direction: column;
            }
            
            .theme-text {
              display: none !important;
            }
            
            .theme-icon {
              display: inline !important;
            }
            
            .title {
              font-size: 32px !important;
            }
            
            .subtitle {
              font-size: 16px !important;
            }
            
            .header {
              padding: 30px 16px 24px !important;
            }
            
            .stats {
              font-size: 13px !important;
              gap: 10px !important;
              flex-wrap: wrap !important;
            }
            
            .grid {
              grid-template-columns: 1fr !important;
              padding: 0 16px 20px !important;
            }
            
            .card-title {
              font-size: 16px !important;
            }
            
            .card-text {
              font-size: 14px !important;
            }
            
            .file-info {
              font-size: 12px !important;
              gap: 12px !important;
            }
            
            .download-button, .downloaded-button {
              font-size: 14px !important;
              padding: 8px 16px !important;
            }
            
            .cta-content {
              padding: 32px 20px !important;
            }
            
            .cta-title {
              font-size: 24px !important;
            }
            
            .cta-text {
              font-size: 16px !important;
            }
            
            .footer-links {
              gap: 16px !important;
            }
            
            .footer-logo {
              font-size: 18px !important;
            }
            
            .navbar {
              padding: 16px 20px !important;
            }
            
            .logo {
              font-size: 20px !important;
            }
            
            .logo-icon {
              font-size: 24px !important;
            }
          }
        `}
      </style>

      <div style={darkMode ? styles.pageDark : styles.pageLight}>
        
        {/* NAVBAR */}
        <div style={darkMode ? styles.navbar : styles.navbarLight} className="navbar">
          <div style={styles.logo} className="logo">
            <span style={styles.logoIcon} className="logo-icon">📊</span> Budget AI
          </div>

          <div style={styles.navLinks} className="nav-links">
            <a href="/" style={styles.navItem}>
              <span style={styles.navIcon}>🏠</span> Home
            </a>
            <a href="/ai" style={styles.navItem}>
              <span style={styles.navIcon}>🤖</span> Chat
            </a>
            <a href="/templates" style={{...styles.navItem, ...styles.activeNavItem}}>
              <span style={styles.navIcon}>📋</span> Templates
            </a>
            <a href="/practice" style={styles.navItem}>
              <span style={styles.navIcon}>🎯</span> Practice
            </a>
            <a href="/about" style={styles.navItem}>
              <span style={styles.navIcon}>📖</span> About
            </a>
          </div>

          <div style={styles.navRight}>
            <button
              onClick={() => setDarkMode(!darkMode)}
              style={darkMode ? styles.themeButton : styles.themeButtonLight}
            >
              <span className="theme-text">{darkMode ? "☀️ Light" : "🌙 Dark"}</span>
              <span className="theme-icon" style={{display: "none"}}>{darkMode ? "☀️" : "🌙"}</span>
            </button>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              style={styles.hamburger}
              className="hamburger-btn"
              aria-label="Toggle menu"
            >
              <span style={{
                ...styles.hamburgerLine,
                ...(isMenuOpen ? styles.hamburgerLineOpen1 : {}),
                ...(darkMode ? {} : styles.hamburgerLineLight),
              }} />
              <span style={{
                ...styles.hamburgerLine,
                ...(isMenuOpen ? styles.hamburgerLineOpen2 : {}),
                ...(darkMode ? {} : styles.hamburgerLineLight),
              }} />
              <span style={{
                ...styles.hamburgerLine,
                ...(isMenuOpen ? styles.hamburgerLineOpen3 : {}),
                ...(darkMode ? {} : styles.hamburgerLineLight),
              }} />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`} style={darkMode ? styles.mobileMenu : styles.mobileMenuLight}>
          <a href="/" style={styles.mobileLink} onClick={() => setIsMenuOpen(false)}>
            <span style={styles.navIcon}>🏠</span> Home
          </a>
          <a href="/ai" style={styles.mobileLink} onClick={() => setIsMenuOpen(false)}>
            <span style={styles.navIcon}>🤖</span> Chat
          </a>
          <a href="/templates" style={{...styles.mobileLink, ...styles.mobileLinkActive}} onClick={() => setIsMenuOpen(false)}>
            <span style={styles.navIcon}>📋</span> Templates
          </a>
          <a href="/practice" style={styles.mobileLink} onClick={() => setIsMenuOpen(false)}>
            <span style={styles.navIcon}>🎯</span> Practice
          </a>
          <a href="/about" style={styles.mobileLink} onClick={() => setIsMenuOpen(false)}>
            <span style={styles.navIcon}>📖</span> About
          </a>
        </div>

        {/* HEADER */}
        <div style={styles.header} className="header">
          <div style={darkMode ? styles.badge : styles.badgeLight}>
            📥 Downloadable Resources
          </div>
          <h1 style={styles.title} className="title">Excel Templates Library</h1>
          <p style={styles.subtitle} className="subtitle">
            Ready-to-use budgeting and reporting templates for Local Government Budget & Planning Officers
          </p>
          <div style={styles.stats} className="stats">
            <span style={styles.statsText}>📁 {templates.length} Templates Available</span>
            <span style={styles.statsDivider}>•</span>
            <span style={styles.statsText}>📥 {templates.reduce((acc, t) => acc + t.downloadCount, 0)} Total Downloads</span>
          </div>
        </div>

        {/* TEMPLATES GRID */}
        <div style={styles.grid} className="grid">
          {templates.map((template) => (
            <div key={template.id} style={darkMode ? styles.card : styles.cardLight}>
              <div style={styles.cardHeader}>
                <div style={styles.cardIcon}>{template.icon}</div>
                <div style={styles.categoryBadge}>{template.category}</div>
              </div>
              <h3 style={styles.cardTitle} className="card-title">{template.title}</h3>
              <p style={styles.cardText} className="card-text">{template.description}</p>
              <div style={darkMode ? styles.fileInfo : styles.fileInfoLight} className="file-info">
                <span>📄 {template.fileType}</span>
                <span>📦 {template.fileSize}</span>
                <span>⬇️ {template.downloadCount}</span>
              </div>
              <div style={styles.cardActions}>
                <button 
                  onClick={() => handleDownload(
                    template.id, 
                    template.title, 
                    template.fileContent, 
                    template.fileName
                  )}
                  style={downloadedTemplates.includes(template.id) ? styles.downloadedButton : styles.downloadButton}
                  className="download-button"
                >
                  {downloadedTemplates.includes(template.id) ? '✅ Downloaded' : '📥 Download'}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA SECTION */}
        <div style={styles.cta}>
          <div style={darkMode ? styles.ctaContent : styles.ctaContentLight} className="cta-content">
            <h2 style={styles.ctaTitle} className="cta-title">Need a custom template?</h2>
            <p style={styles.ctaText} className="cta-text">
              Our AI assistant can help you create custom Excel templates tailored to your specific needs.
            </p>
            <a href="/ai" style={darkMode ? styles.ctaButton : styles.ctaButtonLight}>
              💬 Ask for Custom Template
            </a>
          </div>
        </div>

        {/* FOOTER */}
        <div style={styles.footer}>
          <div style={darkMode ? styles.footerContent : styles.footerContentLight}>
            <div style={styles.footerLogo} className="footer-logo">📊 Budget AI</div>
            <div style={styles.footerLinks} className="footer-links">
              <a href="/about" style={styles.footerLink}>About</a>
              <a href="/privacy" style={styles.footerLink}>Privacy</a>
              <a href="/terms" style={styles.footerLink}>Terms</a>
              <a href="/contact" style={styles.footerLink}>Contact</a>
            </div>
            <div style={styles.footerCopy}>
              © 2026 Oxfam Project. All rights reserved.
            </div>
          </div>
        </div>

      </div>
    </>
  );
}

/* ================= STYLES ================= */

const styles = {
  // Theme containers
  pageDark: {
    minHeight: "100vh",
    background: "#0B1220",
    color: "#E8EDF5",
    fontFamily: "'Segoe UI', -apple-system, sans-serif",
    lineHeight: "1.6",
  },

  pageLight: {
    minHeight: "100vh",
    background: "#F0F4F8",
    color: "#1A2332",
    fontFamily: "'Segoe UI', -apple-system, sans-serif",
    lineHeight: "1.6",
  },

  // Navbar
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px 40px",
    borderBottom: "1px solid rgba(255,255,255,0.08)",
    maxWidth: "1200px",
    margin: "0 auto",
  },

  navbarLight: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px 40px",
    borderBottom: "1px solid rgba(0,0,0,0.1)",
    maxWidth: "1200px",
    margin: "0 auto",
  },

  logo: {
    fontSize: "24px",
    fontWeight: "700",
    display: "flex",
    alignItems: "center",
    gap: "8px",
  },

  logoIcon: {
    fontSize: "28px",
  },

  navLinks: {
    display: "flex",
    gap: "30px",
    alignItems: "center",
  },

  navRight: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
  },

  navItem: {
    textDecoration: "none",
    color: "inherit",
    opacity: "0.7",
    fontSize: "16px",
    fontWeight: "500",
    display: "flex",
    alignItems: "center",
    gap: "6px",
    transition: "opacity 0.2s",
  },

  activeNavItem: {
    opacity: "1",
    fontWeight: "600",
  },

  navIcon: {
    fontSize: "18px",
  },

  // Hamburger
  hamburger: {
    display: "none",
    flexDirection: "column",
    gap: "5px",
    background: "none",
    border: "none",
    cursor: "pointer",
    padding: "4px",
  },

  hamburgerLine: {
    width: "24px",
    height: "2px",
    background: "#E8EDF5",
    borderRadius: "2px",
    transition: "all 0.3s ease",
  },

  hamburgerLineLight: {
    background: "#1A2332",
  },

  hamburgerLineOpen1: {
    transform: "rotate(45deg) translate(5px, 5px)",
  },

  hamburgerLineOpen2: {
    opacity: 0,
  },

  hamburgerLineOpen3: {
    transform: "rotate(-45deg) translate(5px, -5px)",
  },

  mobileMenu: {
    display: "none",
    padding: "12px 40px 20px",
    borderBottom: "1px solid rgba(255,255,255,0.06)",
  },

  mobileMenuLight: {
    display: "none",
    padding: "12px 40px 20px",
    borderBottom: "1px solid rgba(0,0,0,0.06)",
  },

  mobileLink: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    padding: "10px 0",
    textDecoration: "none",
    color: "inherit",
    opacity: "0.7",
    fontSize: "16px",
    fontWeight: "500",
    transition: "opacity 0.2s",
  },

  mobileLinkActive: {
    opacity: "1",
    fontWeight: "600",
  },

  themeButton: {
    padding: "10px 18px",
    borderRadius: "8px",
    border: "1px solid rgba(255,255,255,0.1)",
    cursor: "pointer",
    fontSize: "14px",
    fontWeight: "600",
    background: "rgba(255,255,255,0.05)",
    color: "inherit",
    transition: "background 0.2s, border-color 0.2s",
  },

  themeButtonLight: {
    padding: "10px 18px",
    borderRadius: "8px",
    border: "1px solid rgba(0,0,0,0.1)",
    cursor: "pointer",
    fontSize: "14px",
    fontWeight: "600",
    background: "rgba(0,0,0,0.03)",
    color: "#1A2332",
    transition: "background 0.2s, border-color 0.2s",
  },

  // Header
  header: {
    textAlign: "center",
    padding: "60px 20px 40px",
    maxWidth: "900px",
    margin: "0 auto",
  },

  badge: {
    display: "inline-block",
    background: "rgba(76, 175, 80, 0.12)",
    color: "#4CAF50",
    padding: "6px 20px",
    borderRadius: "20px",
    fontSize: "14px",
    fontWeight: "600",
    marginBottom: "16px",
    border: "1px solid rgba(76, 175, 80, 0.15)",
  },

  badgeLight: {
    display: "inline-block",
    background: "rgba(76, 175, 80, 0.1)",
    color: "#3d8b40",
    padding: "6px 20px",
    borderRadius: "20px",
    fontSize: "14px",
    fontWeight: "600",
    marginBottom: "16px",
    border: "1px solid rgba(76, 175, 80, 0.2)",
  },

  title: {
    fontSize: "48px",
    fontWeight: "800",
    letterSpacing: "-0.02em",
    marginBottom: "16px",
    background: "linear-gradient(135deg, #4CAF50, #81C784)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },

  subtitle: {
    fontSize: "20px",
    opacity: "0.8",
    maxWidth: "700px",
    margin: "0 auto",
    lineHeight: "1.6",
  },

  stats: {
    display: "flex",
    justifyContent: "center",
    gap: "16px",
    marginTop: "20px",
    opacity: "0.7",
    fontSize: "15px",
  },

  statsText: {
    fontWeight: "500",
  },

  statsDivider: {
    opacity: "0.3",
  },

  // Grid
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
    gap: "24px",
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 20px 40px",
  },

  card: {
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(255,255,255,0.08)",
    padding: "24px",
    borderRadius: "16px",
    transition: "transform 0.2s, box-shadow 0.2s",
    display: "flex",
    flexDirection: "column",
  },

  cardLight: {
    background: "rgba(255,255,255,0.6)",
    border: "1px solid rgba(0,0,0,0.08)",
    padding: "24px",
    borderRadius: "16px",
    transition: "transform 0.2s, box-shadow 0.2s",
    display: "flex",
    flexDirection: "column",
  },

  cardHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: "12px",
  },

  cardIcon: {
    fontSize: "36px",
  },

  categoryBadge: {
    fontSize: "11px",
    fontWeight: "600",
    padding: "4px 12px",
    borderRadius: "12px",
    background: "rgba(76, 175, 80, 0.15)",
    color: "#4CAF50",
    whiteSpace: "nowrap",
  },

  cardTitle: {
    fontSize: "18px",
    fontWeight: "700",
    marginBottom: "8px",
  },

  cardText: {
    fontSize: "15px",
    lineHeight: "1.6",
    opacity: "0.85",
    marginBottom: "16px",
    flex: 1,
  },

  fileInfo: {
    display: "flex",
    gap: "16px",
    fontSize: "13px",
    opacity: "0.6",
    padding: "10px 0",
    borderTop: "1px solid rgba(255,255,255,0.06)",
    borderBottom: "1px solid rgba(255,255,255,0.06)",
    marginBottom: "16px",
  },

  fileInfoLight: {
    display: "flex",
    gap: "16px",
    fontSize: "13px",
    opacity: "0.6",
    padding: "10px 0",
    borderTop: "1px solid rgba(0,0,0,0.06)",
    borderBottom: "1px solid rgba(0,0,0,0.06)",
    marginBottom: "16px",
  },

  cardActions: {
    display: "flex",
    gap: "12px",
  },

  downloadButton: {
    padding: "10px 20px",
    background: "#4CAF50",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "15px",
    fontWeight: "600",
    transition: "background 0.2s, transform 0.2s",
    flex: 1,
  },

  downloadedButton: {
    padding: "10px 20px",
    background: "rgba(76, 175, 80, 0.1)",
    color: "#4CAF50",
    border: "1px solid rgba(76, 175, 80, 0.2)",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "15px",
    fontWeight: "600",
    flex: 1,
  },

  // CTA
  cta: {
    maxWidth: "900px",
    margin: "0 auto 48px",
    padding: "0 20px",
  },

  ctaContent: {
    background: "linear-gradient(135deg, rgba(76, 175, 80, 0.12), rgba(76, 175, 80, 0.04))",
    border: "1px solid rgba(76, 175, 80, 0.15)",
    borderRadius: "16px",
    padding: "48px 40px",
    textAlign: "center",
  },

  ctaContentLight: {
    background: "linear-gradient(135deg, rgba(76, 175, 80, 0.08), rgba(76, 175, 80, 0.02))",
    border: "1px solid rgba(76, 175, 80, 0.2)",
    borderRadius: "16px",
    padding: "48px 40px",
    textAlign: "center",
  },

  ctaTitle: {
    fontSize: "28px",
    fontWeight: "700",
    marginBottom: "12px",
  },

  ctaText: {
    fontSize: "18px",
    opacity: "0.8",
    maxWidth: "600px",
    margin: "0 auto 24px",
  },

  ctaButton: {
    display: "inline-block",
    padding: "14px 40px",
    background: "#4CAF50",
    color: "white",
    borderRadius: "8px",
    textDecoration: "none",
    fontWeight: "600",
    fontSize: "18px",
    boxShadow: "0 4px 16px rgba(76, 175, 80, 0.3)",
    border: "1px solid #4CAF50",
  },

  ctaButtonLight: {
    display: "inline-block",
    padding: "14px 40px",
    background: "#4CAF50",
    color: "white",
    borderRadius: "8px",
    textDecoration: "none",
    fontWeight: "600",
    fontSize: "18px",
    boxShadow: "0 4px 16px rgba(76, 175, 80, 0.25)",
    border: "1px solid #4CAF50",
  },

  // Footer
  footer: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 20px",
  },

  footerContent: {
    borderTop: "1px solid rgba(255,255,255,0.08)",
    padding: "32px 0",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    gap: "16px",
  },

  footerContentLight: {
    borderTop: "1px solid rgba(0,0,0,0.1)",
    padding: "32px 0",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    gap: "16px",
  },

  footerLogo: {
    fontSize: "20px",
    fontWeight: "700",
  },

  footerLinks: {
    display: "flex",
    gap: "24px",
  },

  footerLink: {
    textDecoration: "none",
    color: "inherit",
    opacity: "0.7",
    fontSize: "14px",
  },

  footerCopy: {
    fontSize: "14px",
    opacity: "0.6",
  },
};