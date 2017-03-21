---
title: Rouge Test
layout: default
---

<div class="content-wrapper">
<section class="content">
<div class="row">
<div class="col-md-12">

```groovy
group 'com.github.txuritan.maven.test'
version '1.0-SNAPSHOT'

apply plugin: 'java'
apply plugin: 'maven-publish'

sourceCompatibility = 1.5

repositories {
    mavenCentral()
}

dependencies {
    testCompile group: 'junit', name: 'junit', version: '4.11'
}

publishing {
    publications {
        mavenJava(MavenPublication) {
            from components.java
            artifact sourceJar {
                classifier "sources"
            }
        }
    }
    repositories {
        maven {
            url "file:" + project.localMavenPath
        }
    }
}

task indexRepository(type: JavaExec) {
    main = "-jar"
    args = [
            "indexer-cli-6.0-SNAPSHOT.jar",
            "-r",
            project.localMavenPath,
            "-i",
            project.localMavenPath + "/.index",
            "-d",
            project.localMavenPath + "/.index"
    ]
}
```

</div>
</div>
</section>
</div>
