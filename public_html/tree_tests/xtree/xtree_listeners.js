XTREE_LISTENERS = {
    ON_REFRESH_EVENT: "ON_REFRESH",
    transformBase: "",
    list_xsl: null,
    init: function () {
        var xslUrl = XTREE_LISTENERS.transformBase
                + "list_transform.xslt";
        //console.log(xslUrl)
        XTREE_LISTENERS.list_xsl = $.ajax(xslUrl, {
            "async": false,
            "type": "GET"
        }).responseText;

        // console.log("jjj"+XTREE_LISTENERS.list_xsl);

    },
    xml_block_refresh: function (arg) {
        $('#xml_block').text(XTree.toString());
    },
    selected_list_refresh: function (tree) {

        var html = jsxml.transReady(tree, XTREE_LISTENERS.list_xsl);
       // console.log('html ' + html + "\n\n")
       // console.log(XTREE_LISTENERS.list_xsl)
        $('#selected_list_items').html(html);
    }

};