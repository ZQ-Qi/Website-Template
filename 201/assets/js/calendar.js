$(document).ready(function(){
            function logEvent(type, date) {
                $("<div class='log__entry'/>").hide().html("<strong>"+type + "</strong>: "+date).prependTo($('#eventlog')).show(200);
            }
            $('#clearlog').click(function() {
                $('#eventlog').html('');
            });

            $('#demo1-1').datetimepicker({
                //date: new Date(),
                viewMode: 'YMDHMS',
                //date selection event
                onDateChange: function() {
                    logEvent('onDateChange', this.getValue());

                    $('#date-text1-1').text(this.getText());
                    $('#date-text-ymd1-1').text(this.getText('yyyy-MM-dd'));
                    $('#date-value1-1').text(this.getValue());
                },
                //clear button click event
                onClear: function() {
                    logEvent('onClear', this.getValue());
                },
                //ok button click event
                onOk: function() {
                    logEvent('onOk', this.getValue());
                },
                //close button click event
                onClose: function() {
                    logEvent('onClose', this.getValue());
                },
                //today button click event
                onToday: function() {
                    logEvent('onToday', this.getValue());
                },
            });
            $('#demo1-2').datetimepicker({
                date: new Date(),
                viewMode: 'YMDHM',
                onDateChange: function(){
                    $('#date-text1-2').text(this.getText());
                    $('#date-text-ymd1-2').text(this.getText('yyyy-MM-dd'));
                    $('#date-value1-2').text(this.getValue());
                }
            });
            $('#demo2').datetimepicker({
                date: new Date(),
                viewMode: 'YMD',
                onDateChange: function(){
                    $('#date-text2').text(this.getText());
                    $('#date-text-ymd2').text(this.getText('yyyy-MM-dd'));
                    $('#date-value2').text(this.getValue());
                }
            });
            $('#demo3').datetimepicker({
                date: new Date(),
                viewMode: 'YM',
                onDateChange: function(){
                    $('#date-text3').text(this.getText());
                    $('#date-text-ymd3').text(this.getText('yyyy-MM-dd'));
                    $('#date-value3').text(this.getValue());
                }
            });
            $('#demo4-1').datetimepicker({
                date: new Date(),
                viewMode: 'HMS',
                onDateChange: function(){
                    $('#date-text4-1').text(this.getText());
                    $('#date-text-ymd4-1').text(this.getText('yyyy-MM-dd'));
                    $('#date-value4-1').text(this.getValue());
                }
            });
            $('#demo4-2').datetimepicker({
                date: new Date(),
                viewMode: 'HM',
                onDateChange: function(){
                    $('#date-text4-2').text(this.getText());
                    $('#date-text-ymd4-2').text(this.getText('yyyy-MM-dd'));
                    $('#date-value4-2').text(this.getValue());
                }
            });
            var demoDtp = $.fn.datetimepicker.init('#demo5', {
                date: new Date(),
                startDate: new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate()-8, 0, 0, 0),
                endDate: new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate()+10, 23, 59, 59),
                viewMode: 'YMDHMS',
                onDateChange: function(){
                    $('#date-text5').text(this.getText());
                    $('#date-text-ymd5').text(this.getText('yyyy-MM-dd'));
                    $('#date-value5').text(this.getValue());
                }
            });
            $('#demo6').datetimepicker({
                date: new Date(),
                firstDayOfWeek: 1,
                viewMode: 'YMDHMS',
                onDateChange: function(){
                    $('#date-text6').text(this.getText());
                    $('#date-text-ymd6').text(this.getText('yyyy-MM-dd'));
                    $('#date-value6').text(this.getValue());
                }
            });
        });