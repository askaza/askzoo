<!DOCTYPE xsl:stylesheet [
<!ENTITY % core SYSTEM "../../settings/s.dtd"> %core;
]>
<xsl:stylesheet version="1.0"
				xmlns="http://www.w3.org/1999/xhtml"
				xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
				xmlns:a="http://slcf/templates/settings/bem-scheme/additional"
				xmlns:b="http://slcf/templates/settings/bem-scheme/block"
				xmlns:d="http://slcf/templates/settings/bem-scheme/data"
				xmlns:e="http://slcf/templates/settings/bem-scheme/element"
				xmlns:m="http://slcf/templates/settings/bem-scheme/modification"
				xmlns:p="http://slcf/templates/settings/bem-scheme/pointer"
				xmlns:t="http://slcf/templates/settings/bem-scheme/template"
				xmlns:x="http://slcf/templates/settings/bem-scheme/xhtml"
				xmlns:alxc="http://slcf/templates/settings/bem-scheme/additional-legacy-xhtml-class"
				xmlns:exsl="http://exslt.org/common"
				exclude-result-prefixes="a b e x d p m t alxc"
				extension-element-prefixes="exsl">

		<xsl:template match="breadcrumbs" mode="data" xml:space="preserve">
			<b:breadcrumbs xmlns:v="http://rdf.data-vocabulary.org/#">
				<xsl:apply-templates select="item" mode="data_breadcrumbs"/>
			</b:breadcrumbs>
		</xsl:template>

		<xsl:template match="item" mode="data_breadcrumbs" xml:space="preserve">
			<e:item>
				<e:item-text x:property="v:title" x:rel="v:url"><a:link x:href="{@url}"/><xsl:value-of select="."/></e:item-text><cdata><xsl:text disable-output-escaping="yes"><![CDATA[&nbsp;]]></xsl:text></cdata><e:delimeter><xsl:value-of select="../@delimeter"/></e:delimeter>
			</e:item>
		</xsl:template>

		<xsl:template match="item[last()]" mode="data_breadcrumbs" xml:space="preserve">
			<e:item><m:type val="current"/>
				<e:item-text tag="span"><xsl:value-of select="."/></e:item-text>
			</e:item>
		</xsl:template>

</xsl:stylesheet>