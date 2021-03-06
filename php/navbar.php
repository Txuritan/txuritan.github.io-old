<!-- Nav Bar Start -->
<header class="main-header">
    <a href="/" class="logo">
        <span class="logo-mini">
            <b>TX</b>
        </span>
        <span class="logo-lg">
            <b>TXURITAN</b>
        </span>
    </a>
    <nav class="navbar navbar-static-top" role="navigation">
        <a class="sidebar-toggle" data-toggle="offcanvas" role="button">
            <span class="sr-only">Toggle navigation</span>
        </a>
    </nav>
</header>
<aside class="main-sidebar">
    <section class="sidebar">
        <ul class="sidebar-menu">
            <li>
                <a href="/"><i class="fa fa-paw"></i> <span>Home</span></a>
            </li>
            <li>
                <a href="/downloads.html"><i class="fa fa-cloud-download"></i> <span>Downloads</span></a>
            </li>
            <li class="header">MODS</li>
            <li class="treeview">
                <a><i class="fa fa-cubes"></i> <span>Minecraft</span><i class="fa fa-angle-left pull-right"></i></a>
                <ul class="treeview-menu">
                    <li>
                        <a href="/project-blankslate/index.html"><i class="fa fa-cubes"></i> <span>Project Blankslate</span></a>
                    </li>
                    <li>
                        <a href="/minecraft/patch.html"><i class="fa fa-cubes"></i> <span>Project Patch</span></a>
                    </li>
                    <li>
                        <a href="/minecraft/wither-realms.html"><i class="fa fa-cubes"></i> <span>Project Wither Realm</span></a>
                    </li>
                </ul>
            </li>
            <li class="header">MODPACKS</li>
            <li>
                <a href="/minecraft/legendary-worlds.html"><i class="fa fa-cubes"></i> <span>Legendary Worlds</span></a>
            </li>
            <li>
                <a href="/minecraft/potatocraft.html"><i class="fa fa-cubes"></i> <span>Potatocraft</span></a>
            </li>
            <li>
                <a href="/skyrim/txuritans-skyrim-modpack.html"><i class="fa fa-shield"></i> <span>Txuritan's Skyrim Modpack</span></a>
            </li>
            <li class="header">BLOG</li>
            <li class="treeview">
                <a><i class="fa fa-quote-left"></i> <span>Posts</span><i class="fa fa-angle-left pull-right"></i></a>
                <ul class="treeview-menu">
                    {% for post in site.posts %}
                    <li>
                        <a href="{{ post.url }}"><i class="fa fa-quote-left"></i> <span>{{ post.title }}</span></a>
                    </li>
                    {% endfor %}
                </ul>
            </li>
            <li class="header">MISC</li>
            <li>
                <a href="/alla-and-taeh/alla-and-taeh-1.html"><i class="fa fa-file-text"></i> <span>Alla and Taeh Part 1</span></a>
            </li>
            <li>
                <a href="/alla-and-taeh/alla-and-taeh-2.html"><i class="fa fa-file-text"></i> <span>Alla and Taeh Part 2</span></a>
            </li>
        </ul>
    </section>
</aside>
<!-- Nav Bar End -->
