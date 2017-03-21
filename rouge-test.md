---
title: Rouge Test
layout: default
---

<style>
span.kn {
    color: #E67E22;
}

span.n {
    color: #E74C3C;
}

span.na {
    color: #F0DEB4;
}

span.nn {
    color: #FFCD02;
}

span.nd {
    color: #9B59B6;
}

span.kd {
    color: #3498DB;
}

span.s {
    color: #2ECC71;
}

span.kt {
    color: #1ABC9C;
}

span.nf {
    color: #A5C63B;
}

span.k {
    color: #745EC5;
}
</style>

<div class="content-wrapper">
<section class="content">
<div class="row">
<div class="col-md-12">

```java
package alopex.metalliferous;

import alopex.metalliferous.config.ConfigVariables;
import alopex.metalliferous.init.Init;
import alopex.metalliferous.init.PostInit;
import alopex.metalliferous.init.PreInit;
import alopex.metalliferous.proxy.CommonProxy;
import alopex.metalliferous.references.Reference;
import alopex.metalliferous.util.LogHelper;
import net.minecraftforge.fml.common.Mod;
import net.minecraftforge.fml.common.SidedProxy;
import net.minecraftforge.fml.common.event.FMLInitializationEvent;
import net.minecraftforge.fml.common.event.FMLPostInitializationEvent;
import net.minecraftforge.fml.common.event.FMLPreInitializationEvent;

@SuppressWarnings("unused")
@Mod(
        name = Reference.modName,
        modid = Reference.modID,
        version = Reference.modVersion,
        dependencies = Reference.dependencies
)
public class Metalliferous {

    @SidedProxy(
            serverSide = "alopex.metalliferous.proxy.CommonProxy",
            clientSide = "alopex.metalliferous.proxy.ClientProxy"
    )
    public static CommonProxy proxy;
    
    public static int number = 1;
    public static final int number = 1;
    
    public static Double numberDuble = 1.0;
    public static final Double numberDuble = 1.0;
    
    public static Boolean bool = false;
    public static final Boolean bool = false;
   

    @Mod.Instance
    public static Metalliferous instance = new Metalliferous();

    @Mod.EventHandler
    public static void preinit(FMLPreInitializationEvent event) {
        if (ConfigVariables.debugShow || ConfigVariables.debugMinimalShow) {
            LogHelper.info("Entering PreInitialization");
        }

        PreInit.preinit();

        if (ConfigVariables.debugShow || ConfigVariables.debugMinimalShow) {
            LogHelper.info("Exiting PreInitialization");
        }
    }

    @Mod.EventHandler
    public static void init(FMLInitializationEvent event) {
        if (ConfigVariables.debugShow || ConfigVariables.debugMinimalShow) {
            LogHelper.info("Entering Initialization");
        }

        Init.init();

        if (ConfigVariables.debugShow || ConfigVariables.debugMinimalShow) {
            LogHelper.info("Exiting Initialization");
        }
    }

    @Mod.EventHandler
    public static void postinit(FMLPostInitializationEvent event) {
        if (ConfigVariables.debugShow || ConfigVariables.debugMinimalShow) {
            LogHelper.info("Entering PostInitialization");
        }

        PostInit.postinit();

        if (ConfigVariables.debugShow || ConfigVariables.debugMinimalShow) {
            LogHelper.info("Exiting PostInitialization");
        }
    }
}
```

</div>
</div>
</section>
</div>
