!function($) {
    "use strict";
    $.fn.meanmenu = function(options) {
        var defaults = {
            meanMenuTarget: jQuery(this),
            meanMenuContainer: ".spacle-responsive-menu",
            meanMenuClose: "X",
            meanMenuCloseSize: "18px",
            meanMenuOpen: "<span /><span /><span />",
            meanRevealPosition: "right",
            meanRevealPositionDistance: "0",
            meanRevealColour: "",
            meanScreenWidth: "480",
            meanNavPush: "",
            meanShowChildren: true,
            meanExpandableChildren: true,
            meanExpand: "+",
            meanContract: "-",
            meanRemoveAttrs: false,
            onePage: false,
            meanDisplay: "block",
            removeElements: ""
        };
        options = $.extend(defaults, options);
        var screenWidth = window.innerWidth || document.documentElement.clientWidth;
        return this.each(function() {
            var means = options,
                n = means.meanMenuTarget,
                t = means.meanMenuContainer,
                closeStr = means.meanMenuClose,
                closeSize = means.meanMenuCloseSize,
                openStr = means.meanMenuOpen,
                revealPos = means.meanRevealPosition,
                revealDist = means.meanRevealPositionDistance,
                revealColor = means.meanRevealColour,
                maxWidth = means.meanScreenWidth,
                navPush = means.meanNavPush,
                showChildren = means.meanShowChildren,
                expandableChildren = means.meanExpandableChildren,
                expandStr = means.meanExpand,
                contractStr = means.meanContract,
                removeAttrs = means.meanRemoveAttrs,
                singlePage = means.onePage,
                displayStyle = means.meanDisplay,
                removeEl = means.removeElements;
            var isMobile = navigator.userAgent.match(/iPhone|iPod|iPad|Android|Blackberry|Windows Phone/i),
                isOldIE = navigator.userAgent.match(/MSIE 8|MSIE 7/i);
            if (isOldIE) {
                jQuery("html").css("overflow-y", "scroll");
            }
            var revealStyles = "",
                positionReveal = function() {
                    if (revealPos === "center") {
                        var w = window.innerWidth || document.documentElement.clientWidth,
                            leftPos = w / 2 - 22 + "px";
                        revealStyles = "left:" + leftPos + ";right:auto;";
                        if (isMobile) {
                            jQuery(".meanmenu-reveal").animate({ left: leftPos });
                        } else {
                            jQuery(".meanmenu-reveal").css("left", leftPos);
                        }
                    }
                },
                menuOpen = false,
                menuBuilt = false;
            if (revealPos === "right") {
                revealStyles = "right:" + revealDist + ";left:auto;";
            }
            if (revealPos === "left") {
                revealStyles = "left:" + revealDist + ";right:auto;";
            }
            positionReveal();
            var revealButton,
                toggleRevealText = function() {
                    revealButton.html(jQuery(revealButton).is(".meanmenu-reveal.meanclose") ? closeStr : openStr);
                },
                removeMean = function() {
                    jQuery(".mean-bar, .mean-push").remove();
                    jQuery(t).removeClass("mean-container");
                    jQuery(n).css("display", displayStyle);
                    menuOpen = false;
                    menuBuilt = false;
                    jQuery(removeEl).removeClass("mean-remove");
                },
                buildMean = function() {
                    if (maxWidth >= screenWidth) {
                        jQuery(removeEl).addClass("mean-remove");
                        menuBuilt = true;
                        var $container = jQuery(t).addClass("mean-container");
                        var $bar = jQuery("<div>", { class: "mean-bar" });
                        var $link = jQuery("<a>", {
                            href: "#nav",
                            class: "meanmenu-reveal"
                        }).html(openStr).attr("style", "background:" + revealColor + ";color:" + revealColor + ";" + revealStyles);
                        var $nav = jQuery("<nav>", { class: "mean-nav" });
                        $bar.append($link, $nav);
                        $container.prepend($bar);
                        var $push = jQuery("<div>", { class: "mean-push" }).css("margin-top", navPush);
                        jQuery(n).before($push);
                        var $menuClone = jQuery(n).clone();
                        $nav.append($menuClone.children());
                        jQuery(n).hide();
                        jQuery(".meanmenu-reveal").show();
                        revealButton = jQuery(".meanmenu-reveal");
                        jQuery(".mean-nav ul").hide();
                        if (showChildren) {
                            if (expandableChildren) {
                                jQuery(".mean-nav ul ul").each(function() {
                                    if (jQuery(this).children().length) {
                                        var $expander = jQuery("<a>", { class: "mean-expand", href: "#" }).text(expandStr).css("font-size", closeSize);
                                        jQuery(this).parent().append($expander);
                                    }
                                });
                                jQuery(document).on("click", ".mean-expand", function(e) {
                                    e.preventDefault();
                                    var $exp = jQuery(this);
                                    if ($exp.hasClass("mean-clicked")) {
                                        $exp.text(expandStr);
                                        $exp.prev("ul").slideUp(300);
                                    } else {
                                        $exp.text(contractStr);
                                        $exp.prev("ul").slideDown(300);
                                    }
                                    $exp.toggleClass("mean-clicked");
                                });
                            } else {
                                jQuery(".mean-nav ul ul").show();
                            }
                        } else {
                            jQuery(".mean-nav ul ul").hide();
                        }
                        jQuery(".mean-nav ul li").last().addClass("mean-last");
                        revealButton.removeClass("meanclose");
                        revealButton.on("click", function(e) {
                            e.preventDefault();
                            if (!menuOpen) {
                                revealButton.css({ "text-align": "center", "text-indent": "0", "font-size": closeSize });
                                jQuery(".mean-nav ul:first").slideDown();
                                menuOpen = true;
                            } else {
                                jQuery(".mean-nav ul:first").slideUp();
                                menuOpen = false;
                            }
                            revealButton.toggleClass("meanclose");
                            toggleRevealText();
                            jQuery(removeEl).addClass("mean-remove");
                        });
                        if (singlePage) {
                            jQuery(".mean-nav ul > li > a:first-child").on("click", function() {
                                jQuery(".mean-nav ul:first").slideUp();
                                menuOpen = false;
                                revealButton.toggleClass("meanclose").html(openStr);
                            });
                        }
                    } else {
                        removeMean();
                    }
                };
            if (!isMobile) {
                jQuery(window).resize(function() {
                    screenWidth = window.innerWidth || document.documentElement.clientWidth;
                    removeMean();
                    if (maxWidth >= screenWidth) {
                        buildMean();
                        positionReveal();
                    } else {
                        removeMean();
                    }
                });
            }
            jQuery(window).resize(function() {
                screenWidth = window.innerWidth || document.documentElement.clientWidth;
                if (isMobile) {
                    positionReveal();
                    if (maxWidth >= screenWidth && !menuBuilt) {
                        buildMean();
                    } else {
                        removeMean();
                    }
                } else {
                    removeMean();
                    if (maxWidth >= screenWidth) {
                        buildMean();
                        positionReveal();
                    }
                }
            });
            buildMean();
        });
    };
}(jQuery);
