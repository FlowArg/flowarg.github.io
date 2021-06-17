String.prototype.removeLast = function (text) {
    let origin = this;
    textLenght = text.length;
    originLen = origin.length;
    if (textLenght == 0) return origin;

    start = originLen - textLenght;
    if (start < 0) {
        return origin;
    }
    if (start == 0) {
        return "";
    }
    for (i = start; i >= 0; i--) {
        k = 0;
        while (origin[i + k] == text[k]) {
            k++;
            if (k == textLenght) break;
        }
        if (k == textLenght) break;
    }
    //not founded
    if (k != textLenght) return origin;

    //founded and i starts on correct and i+k is the first char after
    end = origin.substring(i + k, originLen);
    if (i == 0) return end;
    else {
        start = origin.substring(0, i);
        return start + end;
    }
};


var current_path = "maven/";
const avaible_paths = {
    maven: {
        fr: {
            arinonia: {
                arilibfx: {
                    "1.0.2": ["arilibfx-1.0.2.jar", "arilibfx-1.0.2.pom", "arilibfx-1.0.2-sources.jar"],
                    "1.0.3": ["arilibfx-1.0.3.jar", "arilibfx-1.0.3.pom", "arilibfx-1.0.3-sources.jar"],
                },
                launcherlib: {
                    "1.0": ["launcherlib-1.0.jar", "launcherlib-1.0.pom", "launcherlib-1.0-sources.jar"],
                },
            },
            flowarg: {
                flowmultitools: {
                    "1.0.2": ["flowmultitools-1.0.2.jar", "flowmultitools-1.0.2.pom", "flowmultitools-1.0.2-sources.jar"],
                    "1.0.3": ["flowmultitools-1.0.3.jar", "flowmultitools-1.0.3.pom", "flowmultitools-1.0.3-sources.jar"],
                    "1.0.4": ["flowmultitools-1.0.4.jar", "flowmultitools-1.0.4.pom", "flowmultitools-1.0.4-sources.jar"],
                    "1.0.5": ["flowmultitools-1.0.5.jar", "flowmultitools-1.0.5.pom", "flowmultitools-1.0.5-sources.jar"],
                    "1.1.0": ["flowmultitools-1.1.0.jar", "flowmultitools-1.1.0.pom", "flowmultitools-1.1.0-sources.jar"],
                    "1.1.1": ["flowmultitools-1.1.1.jar", "flowmultitools-1.1.1.pom", "flowmultitools-1.1.1-sources.jar"],
                    "1.1.2": ["flowmultitools-1.1.2.jar", "flowmultitools-1.1.2.pom", "flowmultitools-1.1.2-sources.jar"],
                    "1.1.3": ["flowmultitools-1.1.3.jar", "flowmultitools-1.1.3.pom", "flowmultitools-1.1.3-sources.jar"],
                    "1.2.0": ["flowmultitools-1.2.0.jar", "flowmultitools-1.2.0.pom", "flowmultitools-1.2.0-sources.jar"],
                    "1.2.1": ["flowmultitools-1.2.1.jar", "flowmultitools-1.2.1.pom", "flowmultitools-1.2.1-sources.jar"],
                    "1.2.2": ["flowmultitools-1.2.2.jar", "flowmultitools-1.2.2.pom", "flowmultitools-1.2.2-sources.jar"],
                    "1.2.3": ["flowmultitools-1.2.3.jar", "flowmultitools-1.2.3.pom", "flowmultitools-1.2.3-sources.jar"],
                    "1.2.4": ["flowmultitools-1.2.4.jar", "flowmultitools-1.2.4.pom", "flowmultitools-1.2.4-sources.jar"],
                },
                flowupdater: {
                    "1.1.0": ["flowupdater-1.1.0.jar", "flowupdater-1.1.0.pom", "flowupdater-1.1.0-sources.jar"],
                    "1.1.1": ["flowupdater-1.1.1.jar", "flowupdater-1.1.1.pom", "flowupdater-1.1.1-sources.jar"],
                    "1.1.2": ["flowupdater-1.1.2.jar", "flowupdater-1.1.2.pom", "flowupdater-1.1.2-sources.jar"],
                    "1.1.3": ["flowupdater-1.1.3.jar", "flowupdater-1.1.3.pom", "flowupdater-1.1.3-sources.jar"],
                    "1.1.4": ["flowupdater-1.1.4.jar", "flowupdater-1.1.4.pom", "flowupdater-1.1.4-sources.jar"],
                    "1.1.5": ["flowupdater-1.1.5.jar", "flowupdater-1.1.5.pom", "flowupdater-1.1.5-sources.jar"],
                    "1.1.6": ["flowupdater-1.1.6.jar", "flowupdater-1.1.6.pom", "flowupdater-1.1.6-sources.jar"],
                    "1.1.7": ["flowupdater-1.1.7.jar", "flowupdater-1.1.7.pom", "flowupdater-1.1.7-sources.jar"],
                    "1.1.8": ["flowupdater-1.1.8.jar", "flowupdater-1.1.8.pom", "flowupdater-1.1.8-sources.jar"],
                    "1.1.9": ["flowupdater-1.1.9.jar", "flowupdater-1.1.9.pom", "flowupdater-1.1.9-sources.jar"],
                    "1.1.10": ["flowupdater-1.1.10.jar", "flowupdater-1.1.10.pom", "flowupdater-1.1.10-sources.jar"],
                    "1.1.11": ["flowupdater-1.1.11.jar", "flowupdater-1.1.11.pom", "flowupdater-1.1.11-sources.jar"],
                    "1.1.12": ["flowupdater-1.1.12.jar", "flowupdater-1.1.12.pom", "flowupdater-1.1.12-sources.jar"],
                    "1.1.13": ["flowupdater-1.1.13.jar", "flowupdater-1.1.13.pom", "flowupdater-1.1.13-sources.jar"],
                    "1.1.14": ["flowupdater-1.1.14.jar", "flowupdater-1.1.14.pom", "flowupdater-1.1.14-sources.jar"],
                    "1.2.0": ["flowupdater-1.2.0.jar", "flowupdater-1.2.0.pom", "flowupdater-1.2.0-sources.jar"],
                    "1.2.1": ["flowupdater-1.2.1.jar", "flowupdater-1.2.1.pom", "flowupdater-1.2.1-sources.jar"],
                    "1.2.2": ["flowupdater-1.2.2.jar", "flowupdater-1.2.2.pom", "flowupdater-1.2.2-sources.jar"],
                    "1.2.3": ["flowupdater-1.2.3.jar", "flowupdater-1.2.3.pom", "flowupdater-1.2.3-sources.jar"],
                    "1.2.4": ["flowupdater-1.2.4.jar", "flowupdater-1.2.4.pom", "flowupdater-1.2.4-sources.jar"],
                    "1.2.5": ["flowupdater-1.2.5.jar", "flowupdater-1.2.5.pom", "flowupdater-1.2.5-sources.jar"],
                    "1.2.6": ["flowupdater-1.2.6.jar", "flowupdater-1.2.6.pom", "flowupdater-1.2.6-sources.jar"],
                    "1.2.7": ["flowupdater-1.2.7.jar", "flowupdater-1.2.7.pom", "flowupdater-1.2.7-sources.jar"],
                    "1.2.8": ["flowupdater-1.2.8.jar", "flowupdater-1.2.8.pom", "flowupdater-1.2.8-sources.jar"],
                    "1.2.9": ["flowupdater-1.2.9.jar", "flowupdater-1.2.9.pom", "flowupdater-1.2.9-sources.jar"],
                    "1.2.10": ["flowupdater-1.2.10.jar", "flowupdater-1.2.10.pom", "flowupdater-1.2.10-sources.jar"],
                    "1.3.0": ["flowupdater-1.3.0.jar", "flowupdater-1.3.0.pom", "flowupdater-1.3.0-sources.jar"],
                    "1.3.1": ["flowupdater-1.3.1.jar", "flowupdater-1.3.1.pom", "flowupdater-1.3.1-sources.jar"],
                    "1.3.2": ["flowupdater-1.3.2.jar", "flowupdater-1.3.2.pom", "flowupdater-1.3.2-sources.jar"],
                    "1.3.3": ["flowupdater-1.3.3.jar", "flowupdater-1.3.3.pom", "flowupdater-1.3.3-sources.jar"],
                },
            },
            litarvan: {
                openauth: {
                    "1.0.4": ["openauth-1.0.4.jar", "openauth-1.0.4.pom", "openauth-1.0.4-sources.jar"],
                },
                openlauncherlib: {
                    "3.0.5-FLOWARGVERSION": ["openlauncherlib-3.0.5-FLOWARGVERSION.jar", "openlauncherlib-3.0.5-FLOWARGVERSION.pom", "openlauncherlib-3.0.5-FLOWARGVERSION-sources.jar"],
                    "3.0.6-FLOWARGVERSION": ["openlauncherlib-3.0.6-FLOWARGVERSION.jar", "openlauncherlib-3.0.6-FLOWARGVERSION.pom", "openlauncherlib-3.0.6-FLOWARGVERSION-sources.jar"],
                    "3.0.7-FLOWARGVERSION": ["openlauncherlib-3.0.7-FLOWARGVERSION.jar", "openlauncherlib-3.0.7-FLOWARGVERSION.pom", "openlauncherlib-3.0.7-FLOWARGVERSION-sources.jar"],
                    "3.1.0-FLOWARGVERSION": ["openlauncherlib-3.1.0-FLOWARGVERSION.jar", "openlauncherlib-3.1.0-FLOWARGVERSION.pom", "openlauncherlib-3.1.0-FLOWARGVERSION-sources.jar"],
                    "3.1.1-FLOWARGVERSION": ["openlauncherlib-3.1.1-FLOWARGVERSION.jar", "openlauncherlib-3.1.1-FLOWARGVERSION.pom", "openlauncherlib-3.1.1-FLOWARGVERSION-sources.jar"],
                },
            },
        },
    },
};

function clicked_link(clicked_path) {
    current_path += clicked_path;
    updateElements();
}

function updateElements() {
    $("#current_path").text("Index of " + current_path);
    $("li").remove();

    var dirs = eval('avaible_paths["' + current_path.removeLast("/").split("/").join('"]["') + '"]'); // avaible_paths["maven"]["fr"]...

    let count = 0;

    if (dirs.length) {
        // if its iterable, it means there are jar/pom files
        for (i = 0; i < dirs.length; i++) {
            let dir = dirs[i];

            var link = document.createElement("LI");
            link.className = count % 2 === 0 ? "dark" : "light";

            var _clickable = document.createElement("A");
            _clickable.href = `${current_path.replace("maven/", "")}${dir}`; // replace nedded or it'll result in maven/maven/fr/...
            _clickable.innerHTML = `${dir}`;

            link.appendChild(_clickable);
            $("ul").append(link);

            count += 1;
        }
    } else {
        for (const dir of Object.keys(dirs)) {
            let splitted_name = dir.split("/");

            var link = document.createElement("LI");
            link.className = count % 2 === 0 ? "dark" : "light";

            var _clickable = document.createElement("A");
            _clickable.href = `javascript:clicked_link("${dir}/")`;
            _clickable.innerHTML = `${dir}`;

            link.appendChild(_clickable);
            $("ul").append(link);

            count += 1;
        }
    }
}

function setupBack() {
    function goBack() {
        if (current_path != "maven/") {
            let _path = current_path.removeLast("/");
            let splitted_path = _path.split("/");
            current_path = _path.removeLast(splitted_path[splitted_path.length - 1]);

            updateElements();
        } else {
            window.location = new String(window.location).removeLast(current_path);
        }
    }

    window.onload = function () {
        if (typeof history.pushState === "function") {
            history.pushState("jibberish", null, null);
            window.onpopstate = function () {
                history.pushState("newjibberish", null, null);
                // Handle the back (or forward) buttons here
                // Will NOT handle refresh, use onbeforeunload for this.
                goBack();
            };
        }
    };
}

window.addEventListener("DOMContentLoaded", (event) => {
    updateElements();
    setupBack();
});
