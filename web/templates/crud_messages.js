$(function(){
    var url = "http://127.0.0.1:5000/messages";


    $("#grid").dxDataGrid({
        dataSource: DevExpress.data.AspNet.createStore({
            key: "id",
            loadUrl: url ,
            insertUrl: url ,
            updateUrl: url ,
            deleteUrl: url ,
            onBeforeSend: function(method, ajaxOptions) {
                ajaxOptions.xhrFields = { withCredentials: true };
            }
        }),
        editing: {
            allowUpdating: true,
            allowDeleting: true,
            allowAdding: true
        },

        remoteOperations: true,
        paging: {
            pageSize: 12
        },
        pager: {
            showPageSizeSelector: true,
            allowedPageSizes: [8, 12, 20]
        },
        columns:
        [{
            dataField: "id",
            dataType: "number",
            allowEditing: false
        }, {
            dataField: "content",caption: "Mensaje: "
        }, {
            dataField: "sent_on",caption: "Fecha: "
        }, {
            dataField: "user_from_id",caption: "Para: ",displayExpr: "name"
        }, {
            dataField: "user_to_id",caption: "De: ",displayExpr: "name"
        }, ]
    }).dxDataGrid("instance");
});
