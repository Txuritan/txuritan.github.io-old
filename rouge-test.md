---
title: Rouge Test
layout: default
---
<style>
span.kn { color: #E67E22; }

span.n { color: #E74C3C; }

span.na { color: #F0DEB4; }

span.nn { color: #FFCD02; }

span.nd { color: #9B59B6; }

span.kd { color: #3498DB; }

span.s { color: #2ECC71; }

span.kt { color: #1ABC9C; }

span.nf { color: #A5C63B; }

span.k { color: #745EC5; }
</style>

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
