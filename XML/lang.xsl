<?xml version="1.0" encoding="UTF-8" ?>
<xsl:stylesheet version = "1.0"
     xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:output method="html"/> 
<xsl:template match="/">
<DIV class="WIDTH : 80%; margin : 0 auto; display: block;"><xsl:apply-templates /></DIV>
</xsl:template>

<xsl:template match="CAT">
<DIV style="background-color : #111111; display : flex; justify-content : left; margin : 0 auto 25px auto; border : 1px solid black; color: #FFFFFF;">
	 <DIV style="max-width : 500px"><xsl:apply-templates select="CONTENT"/></DIV>
</DIV> 
</xsl:template>




<xsl:template match="CONTENT"> 
     <xsl:apply-templates select="NAME"/>
	 <xsl:apply-templates select="INFO"/>
	 <xsl:apply-templates select="COLOR"/>
</xsl:template>


<xsl:template match="NAME">
<p style="display : block;	padding : 0px 10px 10px 10px;"><xsl:value-of select="."/></p>
</xsl:template>

<xsl:template match="INFO">
<p style="display : block;	padding : 0px 10px 10px 10px;"><xsl:value-of select="."/></p>
</xsl:template>

<xsl:template match="EMAIL">
<p style="display : block;	padding : 0px 10px 10px 10px;"><xsl:value-of select="."/></p>
</xsl:template>

<xsl:template match="PHONE">
<p style="display : block;	padding : 0px 10px 10px 10px;"><xsl:value-of select="."/></p>
</xsl:template>

<xsl:template match="HOBBY">
<p style="display : block;	padding : 0px 10px 10px 10px;"><xsl:value-of select="."/></p>
</xsl:template>

</xsl:stylesheet> 