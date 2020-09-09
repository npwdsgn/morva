        $(document).ready(function () {
            $("button").click(function (event) {
                event.preventDefault();
                CopyToClipboard("hello@morvalab.com");
            });
        });

        function CopyToClipboard(value, showNotification, notificationText) {
            var $temp = $("<input>");
            $("body").append($temp);
            $temp.val(value).select();
            document.execCommand("copy");
            $temp.remove();

            if (typeof showNotification === 'undefined') {
                showNotification = true;
            }
            if (typeof notificationText === 'undefined') {
                notificationText = '💌 hello@morvalab.com copied to clipboard';
            }


            var notificationTag = $("div.copy-notification");
            if (showNotification && notificationTag.length == 0) {
                notificationTag = $("<div/>", { "class": "copy-notification", text: notificationText });
                $("body").append(notificationTag);

                notificationTag.slideDown("3000", function () {
                    setTimeout(function () {
                        notificationTag.slideUp("3000", function () {
                            notificationTag.remove();
                        });
                    }, 2000);
                });
            }
        }