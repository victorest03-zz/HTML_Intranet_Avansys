
$(document).ready(function() {
 
    var table = $('#tabla').DataTable( {
        lengthChange: false,
        ajax: "/js/ar-json.json",
        columns: [
            { data: null, render: function ( data, type, row ) {
                // Combine the first and last names into a single table field
                return data.first_name+' '+data.last_name;
            } },
            { data: "position" },
            { data: "office" },
            { data: "extn" },
            { data: "start_date" },
            { data: "salary", render: $.fn.dataTable.render.number( ',', '.', 0, 'S/. ' ) },
            { defaultContent: "<a class='fa fa-pencil' onclick='alert(\"editar\")'></a><a class='fa fa-trash-o' onclick='alert(\"borrar\")'></a><a class='fa fa-print' onclick='alert(\"imprimir\")'></a>"}
        ],
        select: true,
        dom: '<"toolbar">frtip',
        language: {
            "sProcessing":     "Procesando...",
            "sLengthMenu":     "Mostrar _MENU_ registros",
            "sZeroRecords":    "No se encontraron resultados",
            "sEmptyTable":     "Ningún dato disponible en esta tabla",
            "sInfo":           "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
            "sInfoEmpty":      "Mostrando registros del 0 al 0 de un total de 0 registros",
            "sInfoFiltered":   "(filtrado de un total de _MAX_ registros)",
            "sInfoPostFix":    "",
            "sSearch":         "Buscar:",
            "sUrl":            "",
            "sInfoThousands":  ",",
            "sLoadingRecords": "Cargando...",
            "oPaginate": {
                "sFirst":    "Primero",
                "sLast":     "Último",
                "sNext":     "Siguiente",
                "sPrevious": "Anterior"
            },
            "oAria": {
                "sSortAscending":  ": Activar para ordenar la columna de manera ascendente",
                "sSortDescending": ": Activar para ordenar la columna de manera descendente"
            }
        }
    } );

    
    $("div.toolbar").html('<button type="button" class="btn"><i class="fa fa-search"></i>Consultar</button><button type="button" class="btn"><i class="fa fa-reply-all"></i>Exportar</button><button type="button" class="btn"><i class="fa fa-print"></i>Imprimir</button><select id="cboCombo" class="form-control"><option>Seleccione Oficina...</option><option>Tokyo</option><option>San Francisco</option><option>New York</option><option>London</option><option>Edinburgh</option></select>');

} );