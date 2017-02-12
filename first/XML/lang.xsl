<?xml version="1.0" encoding="UTF-8" ?>

<xsl:stylesheet version = "1.0"
     xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:output method="html"/> 
<xsl:template match="/">
<DIV class="WIDTH : 80%; margin : 0 auto; display: block;"><xsl:apply-templates /></DIV>
</xsl:template>

<xsl:template match="CAT">
<DIV style=" display : flex; justify-content : left;  border : 1px solid black; color: #FFFFFF;">
	 <DIV style="max-width : 500px"><xsl:apply-templates select="CONTENT"/></DIV>
</DIV> 
</xsl:template>




<xsl:template match="CONTENT"> 
     <xsl:apply-templates select="NAME"/>
	 <xsl:apply-templates select="INFO"/>
	 <xsl:apply-templates select="COLOR"/>
</xsl:template>


<xsl:template match="NAME">
<p style="display : block;	padding : 5px;border: 1px solid white;background-color : #6495ed;"><xsl:value-of select="."/></p>
</xsl:template>

<xsl:template match="INFO">
<p style="display : block;	padding : 5px;color: #6495ed;"><xsl:value-of select="."/></p>
</xsl:template>
<xsl:template match="COLOR">
	<xsl:variable name="clr"><xsl:value-of select="."/></xsl:variable>
<p style="text-align: center; display : block;	padding : 5px; width: 40px; height: 40px; border: 1px solid white; background-color: {$clr} ; border-radius: 20px;">^_^</p>
</xsl:template>

</xsl:stylesheet> 