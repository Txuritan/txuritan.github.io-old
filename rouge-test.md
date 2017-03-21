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
