<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:output method="html"/>
    <!-- TODO customize transformation rules 
         syntax recommendation http://www.w3.org/TR/xslt 
    -->
    <xsl:template match="/">
         
                <ul>
                    <xsl:apply-templates/>
                </ul>
          
    </xsl:template>
    <xsl:template match="beta">
        <li>Found beta with value of <i>
                <b id="beta"><xsl:value-of select="." /></b>
            </i>
        </li>
    </xsl:template>
    <xsl:template match="gamma">
        <li>But gamma has a value of <i>
                <b id="gamma"><xsl:value-of select="." /></b>
            </i>
        </li>
    </xsl:template>
</xsl:stylesheet>
