//each end node should have a brief description as well as accompanying picture link be it technology or language or system etc...
const index = {
    child: {
        windows: {

        },
        android: {},
        advancedProgramming: {
            //very simple python and child-friendly coding languages
        },
    },
    teenager: {
        webDev: {
            "frontEnd": {
                "beginner": {
                    "topic_name": "HTML Basics",
                    "topic_desc": "Learn the foundational elements of HTML, including tags, attributes, and basic document structure. Understand how to create and organize content on a web page."
                },
                "beginner_topic_02": {
                    "topic_name": "CSS Fundamentals",
                    "topic_desc": "Explore basic CSS styling techniques, including selectors, properties, and layouts. Learn how to style HTML elements to create visually appealing web pages."
                },
                "beginner_topic_03": {
                    "topic_name": "Basic JavaScript",
                    "topic_desc": "Get introduced to JavaScript, focusing on basic syntax, variables, and control structures. Understand how to make web pages interactive by manipulating the DOM and handling events."
                },
                "advanced": {
                    "topic_name": "Advanced JavaScript",
                    "topic_desc": "Dive deeper into JavaScript with topics like ES6 features, asynchronous programming (promises and async/await), and advanced patterns. Learn to build more complex web applications and enhance functionality."
                }
            },
            "backEnd": {
                "beginner": {
                    "topic_name": "Introduction to Server-Side Programming",
                    "topic_desc": "Understand the basics of server-side programming with languages like Node.js. Learn how to set up a basic server, handle HTTP requests, and work with simple databases."
                }
            }
        },
        windows: {
            "beginner": {
                "topic_name": "Introduction to Windows Basics",
                "topic_desc": "Learn the fundamental concepts of using Windows OS. Understand basic navigation, file management, and simple customization to get comfortable with the Windows environment."
            }
        },
        "hacking": {
            "beginner": {
                "topic_name": "Intro to Online Security",
                "topic_desc": "Explore the basics of online security and privacy. Learn about common online threats, such as phishing and malware, and basic practices for keeping your information safe."
            }
        },
        "AIML": {
            "beginner": {
                "topic_name": "Introduction to AI Concepts",
                "topic_desc": "Get familiar with the basics of artificial intelligence. Learn simple concepts such as what AI is, basic examples, and how it is used in everyday applications like virtual assistants."
            }
        },
        "gameDev": {
            "beginner": {
                "topic_name": "Basics of 2D Game Design",
                "topic_desc": "Start with the fundamentals of designing 2D games. Learn about game mechanics, simple game logic, and using basic tools like Scratch or beginner-friendly game engines."
            }
        },
        "androidDev": {
            "beginner": {
                "topic_name": "Getting Started with Android Basics",
                "topic_desc": "Learn the very basics of Android development. Understand the Android Studio interface, how to create simple apps, and get familiar with basic concepts like layouts and activities."
            }
        },
        "softwareDev": {
            "windows": {
                "beginner": {
                    "topic_name": "Basic Windows Programming",
                    "topic_desc": "Introduction to basic programming concepts using Windows. Learn simple programming in languages like Python or C#, and how to create very basic console or graphical applications."
                }
            },
            "linux": {
                "beginner": {
                    "topic_name": "Introduction to Linux Basics",
                    "topic_desc": "Learn the basics of using Linux. Focus on understanding simple commands, file management, and navigating the Linux file system to get comfortable with the environment."
                }
            },
            "macOS": {
                "beginner": {
                    "topic_name": "Getting Started with macOS",
                    "topic_desc": "Explore the basics of using macOS. Learn how to navigate the system, manage files, and understand basic features of the macOS operating system to build a foundation for further learning."
                }
            }
        },
        "iPhoneDev": {
            "beginner": {
                "topic_name": "Introduction to iOS Development",
                "topic_desc": "Learn the very basics of iOS development using Xcode. Understand how to create simple iOS projects, basic Swift programming, and how to build a basic app interface."
            }
        }
    },
    rookie: {
        "webDev": {
            "frontEnd": {
                "beginner": {
                    "topic_name": "HTML Basics",
                    "topic_desc": "Learn the basics of HTML, including tags, elements, and attributes. Understand how to structure a webpage and create simple static content using HTML."
                },
                "advanced": {
                    "topic_name": "CSS Fundamentals",
                    "topic_desc": "Explore basic CSS concepts such as selectors, properties, and values. Learn how to style HTML elements, work with colors, fonts, and layout techniques."
                }
            },
            "backEnd": {
                "beginner": {
                    "topic_name": "Introduction to Node.js",
                    "topic_desc": "Get started with Node.js for server-side programming. Learn how to set up a basic server, handle HTTP requests, and create simple backend functionalities."
                },
                "advanced": {
                    "topic_name": "Basic REST API Concepts",
                    "topic_desc": "Understand the fundamentals of RESTful APIs. Learn how to create and test basic API endpoints and understand concepts like HTTP methods and request/response formats."
                }
            }
        },
        "windows": {
            "beginner": {
                "topic_name": "Getting Started with Visual Studio",
                "topic_desc": "Learn the basics of using Visual Studio for Windows application development. Understand the IDE layout, how to create projects, and write basic code in C# or C++."
            }
        },
        "hacking": {
            "beginner": {
                "topic_name": "Basic Cybersecurity Concepts",
                "topic_desc": "Familiarize yourself with essential cybersecurity concepts, including basic types of attacks, security best practices, and introductory tools for vulnerability scanning and network analysis."
            }
        },
        "AIML": {
            "beginner": {
                "topic_name": "Introduction to Machine Learning",
                "topic_desc": "Get an overview of machine learning concepts, including supervised vs. unsupervised learning. Learn about basic algorithms and tools like scikit-learn for building simple models."
            }
        },
        "gameDev": {
            "beginner": {
                "topic_name": "Intro to 2D Game Development",
                "topic_desc": "Start with 2D game development using a game engine like Unity. Learn basic game mechanics, sprite management, and simple gameplay programming to create a basic game."
            }
        },
        "androidDev": {
            "beginner": {
                "topic_name": "Basics of Android Studio",
                "topic_desc": "Learn how to navigate Android Studio and set up a basic Android project. Understand the basic components of Android development, including activities and layouts."
            }
        },
        "softwareDev": {
            "windows": {
                "beginner": {
                    "topic_name": "Introduction to Windows Programming",
                    "topic_desc": "Get acquainted with the basics of Windows programming using C# or C++. Learn about basic GUI development, handling user input, and creating simple Windows applications."
                }
            },
            "linux": {
                "beginner": {
                    "topic_name": "Basics of Linux Command Line",
                    "topic_desc": "Learn the fundamentals of using the Linux command line. Understand basic commands for file management, navigation, and system operations to interact with the Linux environment."
                }
            },
            "macOS": {
                "beginner": {
                    "topic_name": "Introduction to macOS Development",
                    "topic_desc": "Get started with macOS development, focusing on Xcode basics and Swift programming. Learn to create simple macOS applications and understand the development environment."
                }
            }
        },
        "iPhoneDev": {
            "beginner": {
                "topic_name": "Getting Started with Xcode",
                "topic_desc": "Learn the basics of using Xcode for iOS development. Understand how to create new projects, use Interface Builder, and write simple Swift code for basic iOS apps."
            }
        },
        "technology": {
            "beginner": {
                "topic_name": "Intro to Modern Technologies",
                "topic_desc": "Explore various modern technologies and their applications. Get a basic understanding of emerging fields such as cloud computing, IoT, and AI, and their impact on technology and industry."
            }
        }
    },
    experienced: {
        "webDev": {
            "servers": {
                "beginner": {
                    "topic_name": "Basic Web Server Setup",
                    "topic_desc": "Learn how to set up and configure a basic web server using technologies like Apache or Nginx. Focus on installation, configuration, and serving static content. Understanding these basics is crucial for any web development project."
                },
                "advanced": {
                    "topic_name": "Server-Side Scripting with Node.js",
                    "topic_desc": "Explore server-side scripting with Node.js, including building RESTful APIs and handling asynchronous operations. Learn to work with Express.js and manage server-side logic for dynamic web applications."
                }
            },
            "clients": {
                "beginner": {
                    "topic_name": "HTML/CSS Fundamentals",
                    "topic_desc": "Get acquainted with HTML and CSS for creating and styling basic web pages. Learn about HTML tags, CSS properties, layouts, and responsive design principles to build structured and visually appealing web content."
                },
                "advanced": {
                    "topic_name": "JavaScript Frameworks",
                    "topic_desc": "Delve into modern JavaScript frameworks like React or Vue.js. Understand component-based architecture, state management, and routing to build complex, interactive user interfaces for web applications."
                }
            }
        },
        "windows": {
            "beginner": {
                "topic_name": "Basic C++ with Visual Studio",
                "topic_desc": "Learn the basics of C++ programming using Visual Studio. Cover fundamental concepts like syntax, variables, control structures, and object-oriented programming to create simple Windows applications."
            },
            "advanced": {
                "topic_name": "Cross-Platform Development with Qt",
                "topic_desc": "Explore cross-platform application development using Qt. Learn to build native applications that run on Windows, Linux, and macOS, focusing on UI design, signal-slot mechanism, and integration with C++."
            }
        },
        "qtcreator": {
            "beginner": {
                "topic_name": "Qt Creator IDE Basics",
                "topic_desc": "Get familiar with Qt Creator IDE, including its interface, tools, and project management features. Learn how to create and manage projects, write code, and use debugging tools effectively."
            },
            "advanced": {
                "topic_name": "Custom Widgets and QML",
                "topic_desc": "Develop custom widgets and use QML for advanced UI design in Qt applications. Understand how to create reusable UI components and integrate them with C++ for complex and dynamic interfaces."
            }
        },
        "glfw": {
            "beginner": {
                "topic_name": "OpenGL Basics with GLFW",
                "topic_desc": "Learn the basics of OpenGL programming using GLFW for creating windows and handling input. Understand rendering, shaders, and basic 3D graphics concepts to build simple graphical applications."
            },
            "advanced": {
                "topic_name": "Advanced OpenGL with GLFW",
                "topic_desc": "Dive into advanced OpenGL techniques using GLFW, such as multi-pass rendering, advanced shading, and performance optimization. Gain skills to create high-performance, visually impressive graphics."
            }
        },
        "unixEnvDevelopment": {
            "beginner": {
                "topic_name": "Basic Shell Scripting",
                "topic_desc": "Learn the basics of shell scripting in Unix environments. Focus on writing simple scripts to automate tasks, manage files, and use common shell commands to enhance productivity."
            },
            "advanced": {
                "topic_name": "Unix System Programming",
                "topic_desc": "Explore advanced Unix system programming, including working with system calls, inter-process communication, and threading. Understand how to develop robust applications that interact deeply with the Unix kernel."
            }
        },
        "hacking": {
            "beginner": {
                "topic_name": "Ethical Hacking Fundamentals",
                "topic_desc": "Get started with ethical hacking, learning about common attack vectors, penetration testing basics, and tools like Nmap and Metasploit. Understand how to identify and mitigate security vulnerabilities in systems."
            },
            "advanced": {
                "topic_name": "Advanced Penetration Testing",
                "topic_desc": "Delve into advanced penetration testing techniques, including exploit development, advanced vulnerability assessment, and post-exploitation. Master tools and methodologies to perform comprehensive security assessments."
            }
        },
        "aiml": {
            "beginner": {
                "topic_name": "Intro to Machine Learning",
                "topic_desc": "Understand the basics of machine learning, including supervised and unsupervised learning, common algorithms, and data preprocessing. Learn to use libraries like scikit-learn to build simple predictive models."
            },
            "advanced": {
                "topic_name": "Deep Learning with TensorFlow",
                "topic_desc": "Advance to deep learning using TensorFlow. Focus on building and training neural networks, including convolutional and recurrent networks, to solve complex problems in image recognition, NLP, and more."
            }
        },
        "gamedev": {
            "beginner": {
                "topic_name": "Basic 2D Game Development",
                "topic_desc": "Learn the fundamentals of 2D game development, including game loops, sprite handling, and simple physics. Use tools like Unity or Godot to create and manage 2D game projects."
            },
            "advanced": {
                "topic_name": "Intermediate 3D Game Techniques",
                "topic_desc": "Explore intermediate 3D game development techniques, such as complex animations, physics simulations, and advanced rendering. Use game engines to create more sophisticated and interactive 3D environments."
            }
        },
        "androidDev": {
            "beginner": {
                "topic_name": "Simple Android Apps",
                "topic_desc": "Get started with Android app development using Java or Kotlin. Learn to build basic apps, handle user input, and work with Android Studio to create functional mobile applications."
            },
            "advanced": {
                "topic_name": "Advanced Android UI Design",
                "topic_desc": "Dive into advanced Android UI design, including custom views, animations, and complex layouts. Use tools like XML and Jetpack Compose to create polished and responsive user interfaces."
            }
        },
        "softwareDev": {
            "windows": {
                "beginner": {
                    "topic_name": "Windows Application Basics",
                    "topic_desc": "Learn the basics of developing Windows applications, including using Visual Studio, basic C++ or C# programming, and creating simple GUI applications with standard libraries."
                },
                "advanced": {
                    "topic_name": "Intermediate Windows API Programming",
                    "topic_desc": "Explore intermediate Windows API programming concepts, including handling system events, creating complex GUI components, and interacting with the Windows operating system at a deeper level."
                }
            },
            "linux": {
                "beginner": {
                    "topic_name": "Intro to Linux Programming",
                    "topic_desc": "Learn the basics of Linux programming, including file handling, process management, and basic system calls. Understand how to write simple programs that interact with the Linux operating system."
                },
                "advanced": {
                    "topic_name": "Linux System Calls and IPC",
                    "topic_desc": "Delve into advanced Linux system programming, focusing on system calls, inter-process communication (IPC), and threading. Develop more complex applications that leverage Linux's powerful features."
                }
            },
            "macOS": {
                "beginner": {
                    "topic_name": "Intro to macOS Development",
                    "topic_desc": "Get started with macOS development, including using Xcode, basic Swift programming, and creating simple macOS applications. Learn to navigate the development environment and build functional desktop apps."
                },
                "advanced": {
                    "topic_name": "Intermediate macOS App Development",
                    "topic_desc": "Advance to intermediate macOS app development, including integrating with macOS frameworks, handling file system operations, and creating more sophisticated desktop applications with improved user experiences."
                }
            }
        },
        "iPhoneDev": {
            "beginner": {
                "topic_name": "Basic iOS Development with Swift",
                "topic_desc": "Learn the fundamentals of iOS app development using Swift. Focus on creating simple apps, understanding the Xcode environment, and using basic UIKit components for user interfaces."
            },
            "advanced": {
                "topic_name": "Advanced iOS Development with SwiftUI",
                "topic_desc": "Explore advanced iOS development with SwiftUI, including building complex views, state management, and integrating SwiftUI with UIKit. Enhance your skills to create modern, responsive iOS applications."
            }
        }
    },
    veteran: {
        webdev: {
            "beginner": {
                "beginner_topic_1": {
                    "topic_name": "Simple Server Management",
                    "topic_desc": "Beginners should start with understanding basic server management concepts. This includes setting up a server using platforms like Apache or Nginx, managing server configurations, and handling simple server maintenance tasks. Familiarity with SSH for remote server management and basic command-line operations are essential skills at this level."
                },
                "beginner_topic_2": {
                    "topic_name": "Basic Monitoring and Logging",
                    "topic_desc": "Understanding how to monitor server performance and log server activities is crucial. Beginners should learn to use tools like top, htop, and basic logging mechanisms to track server health, usage, and troubleshoot common issues. Setting up basic alerts for server performance issues can also be beneficial."
                }
            },
            "advanced": {
                "advanced_topic_1": {
                    "topic_name": "Docker and Containerization",
                    "topic_desc": "Veteran web developers should master Docker to create, deploy, and manage containerized applications. Understanding Dockerfiles, container orchestration, and working with Docker Compose for multi-container applications is essential. Containerization ensures consistency across development, testing, and production environments."
                },
                "advanced_topic_2": {
                    "topic_name": "Kubernetes",
                    "topic_desc": "Kubernetes is a powerful tool for automating the deployment, scaling, and management of containerized applications. Veterans should understand Kubernetes architecture, including nodes, pods, services, and deployments. Knowledge of Helm for managing Kubernetes applications and setting up clusters is also crucial."
                },
                "advanced_topic_3": {
                    "topic_name": "Load Balancing and Scalability",
                    "topic_desc": "Ensuring that web applications can handle increased traffic efficiently is critical. Veterans should be familiar with load balancing techniques, using tools like Nginx, HAProxy, or cloud-based solutions such as AWS Elastic Load Balancer. Implementing auto-scaling and understanding horizontal vs. vertical scaling strategies are also important."
                },
                "advanced_topic_4": {
                    "topic_name": "Advanced Monitoring and Logging",
                    "topic_desc": "Veterans need to implement advanced monitoring and logging solutions. This includes using tools like Prometheus, Grafana, ELK Stack (Elasticsearch, Logstash, Kibana), and setting up alerts and dashboards for real-time monitoring. These tools help in proactive server management and troubleshooting."
                }
            }
        },
        windows: {
            "beginner": {
                "beginner_topic_1": {
                    "topic_name": "Intermediate Bash Scripting",
                    "topic_desc": "While Windows primarily uses PowerShell, understanding Bash scripting can be beneficial for managing Windows Subsystem for Linux (WSL) and cross-platform tasks. Beginners should focus on intermediate concepts such as loops, conditionals, functions, and scripting best practices. Familiarity with WSL and integrating Bash scripts within a Windows environment is also important."
                },
                "beginner_topic_2": {
                    "topic_name": "Sysadmin Roles",
                    "topic_desc": "Sysadmin roles involve managing and maintaining Windows servers and networks. Beginners should learn about Active Directory, Group Policy, user and permission management, and basic networking concepts. Familiarity with Windows Server, including setup and configuration, is crucial for performing day-to-day administrative tasks."
                },
                "beginner_topic_3": {
                    "topic_name": "Windows PowerShell",
                    "topic_desc": "PowerShell is a powerful scripting language and command-line shell designed for task automation and configuration management. Beginners should understand PowerShell cmdlets, scripting basics, and how to automate routine tasks such as file management, system updates, and user management. This skill is essential for efficient system administration."
                }
            },
            "advanced": {
                "advanced_topic_1": {
                    "topic_name": "Advanced PowerShell Scripting",
                    "topic_desc": "Veteran Windows administrators should master advanced PowerShell scripting, including writing complex scripts, creating reusable modules, and leveraging PowerShell's advanced features such as remoting, background jobs, and Desired State Configuration (DSC). These skills enable the automation of sophisticated administrative tasks and system configurations."
                },
                "advanced_topic_2": {
                    "topic_name": "Active Directory Federation Services (ADFS)",
                    "topic_desc": "ADFS provides single sign-on (SSO) and identity management for applications. Veterans should understand the architecture of ADFS, including claims-based authentication, setting up trust relationships, and managing federated identities. Proficiency in configuring and troubleshooting ADFS ensures secure and seamless access to applications across different organizations."
                },
                "advanced_topic_3": {
                    "topic_name": "Hyper-V and Virtualization",
                    "topic_desc": "Hyper-V is a virtualization platform that allows the creation and management of virtual machines (VMs) on Windows. Veterans should have deep knowledge of Hyper-V architecture, VM deployment and management, network virtualization, and storage optimization. Understanding Hyper-V clustering and high availability configurations is also essential."
                },
                "advanced_topic_4": {
                    "topic_name": "Windows Server Clustering and High Availability",
                    "topic_desc": "Ensuring high availability and reliability of services is critical. Veterans should master Windows Server Failover Clustering, including setting up and managing clusters, configuring shared storage, and implementing high availability solutions. Knowledge of disaster recovery planning and backup strategies is also important to maintain service continuity."
                },
                "advanced_topic_5": {
                    "topic_name": "Advanced Networking and Security",
                    "topic_desc": "Veterans need to be proficient in advanced networking concepts such as VLANs, VPNs, and IPsec, as well as security best practices. This includes configuring network policies, firewalls, intrusion detection systems (IDS), and implementing robust security protocols to protect against cyber threats and ensure secure network communication."
                }
            }
        },
        hacking: {
            "beginner": {
                "beginner_topic_1": {
                    "topic_name": "Advanced Networking Concepts",
                    "topic_desc": "Beginners should start with a strong understanding of advanced networking concepts, including TCP/IP protocols, subnetting, routing, and switching. Knowledge of network topologies, firewalls, and network security measures is essential for identifying and exploiting vulnerabilities in network infrastructures."
                },
                "beginner_topic_2": {
                    "topic_name": "Penetration Testing",
                    "topic_desc": "Penetration testing involves simulating cyber attacks to identify vulnerabilities. Beginners should learn the methodologies and tools used in penetration testing, such as Metasploit, Nmap, Burp Suite, and Wireshark. Understanding the stages of penetration testing, including reconnaissance, scanning, exploitation, and reporting, is crucial."
                },
                "beginner_topic_3": {
                    "topic_name": "Exploitation Techniques",
                    "topic_desc": "Learning various exploitation techniques is fundamental for beginners. This includes understanding buffer overflows, SQL injection, cross-site scripting (XSS), and privilege escalation. Hands-on practice with these techniques helps in understanding how vulnerabilities are exploited and how to mitigate them."
                },
                "beginner_topic_4": {
                    "topic_name": "Cryptography Basics",
                    "topic_desc": "Cryptography is essential for protecting data. Beginners should understand the basics of cryptographic algorithms, encryption, decryption, hashing, and digital signatures. Knowledge of how cryptographic systems work and their vulnerabilities helps in breaking and securing communications."
                }
            },
            "advanced": {
                "advanced_topic_1": {
                    "topic_name": "Advanced Exploitation Techniques",
                    "topic_desc": "Veterans should delve into advanced exploitation techniques such as zero-day exploits, kernel exploits, and advanced persistent threats (APTs). Understanding and developing exploits for complex vulnerabilities requires a deep knowledge of system internals, assembly language, and reverse engineering."
                },
                "advanced_topic_2": {
                    "topic_name": "Advanced Reverse Engineering",
                    "topic_desc": "Reverse engineering involves analyzing software to understand its functionality and uncover vulnerabilities. Veterans should master tools and techniques for disassembling and decompiling binaries, analyzing malware, and understanding obfuscation methods. Proficiency in using tools like IDA Pro, Ghidra, and OllyDbg is crucial."
                },
                "advanced_topic_3": {
                    "topic_name": "Advanced Network Attacks",
                    "topic_desc": "Veterans should be skilled in conducting sophisticated network attacks such as man-in-the-middle (MITM) attacks, ARP spoofing, DNS poisoning, and advanced evasion techniques. Understanding how to bypass network defenses and detect stealthy attacks is essential for simulating real-world threats."
                },
                "advanced_topic_4": {
                    "topic_name": "Red Team Operations",
                    "topic_desc": "Red teaming involves simulating full-scale attacks to test an organization's security posture. Veterans should understand how to plan and execute red team operations, including social engineering, physical security testing, and advanced pivoting techniques. Coordinating with blue teams for effective defense strategies is also important."
                },
                "advanced_topic_5": {
                    "topic_name": "Advanced Cryptography and Cryptanalysis",
                    "topic_desc": "Veterans should have a deep understanding of advanced cryptographic algorithms and cryptanalysis techniques. This includes breaking modern encryption schemes, understanding quantum cryptography, and implementing cryptographic protocols securely. Knowledge of how cryptographic weaknesses can be exploited is essential for advanced hacking."
                }
            }
        },
        aiml: {
            "beginner": {
                "beginner_topic_1": {
                    "topic_name": "Mathematical Foundations",
                    "topic_desc": "Beginners should start with a strong grasp of the mathematical foundations of AI and ML. This includes linear algebra, calculus, probability, and statistics. Understanding these concepts is essential for developing and tuning machine learning models and algorithms."
                },
                "beginner_topic_2": {
                    "topic_name": "Basic Machine Learning Algorithms",
                    "topic_desc": "Learning basic machine learning algorithms such as linear regression, logistic regression, k-nearest neighbors, decision trees, and support vector machines is crucial. Beginners should focus on understanding how these algorithms work, their applications, and how to implement them using libraries like scikit-learn."
                },
                "beginner_topic_3": {
                    "topic_name": "Data Preprocessing and Feature Engineering",
                    "topic_desc": "Data preprocessing and feature engineering are vital steps in any ML pipeline. Beginners should learn techniques for handling missing data, normalizing and scaling features, encoding categorical variables, and feature selection. These skills are essential for preparing high-quality data for training ML models."
                },
                "beginner_topic_4": {
                    "topic_name": "Introduction to Neural Networks",
                    "topic_desc": "Understanding the basics of neural networks, including perceptrons, activation functions, and feedforward networks, is important for beginners. Learning how to build simple neural networks using frameworks like TensorFlow or PyTorch provides a foundation for more advanced deep learning topics."
                }
            },
            "advanced": {
                "advanced_topic_1": {
                    "topic_name": "Deep Learning Architectures",
                    "topic_desc": "Veterans should master advanced deep learning architectures such as convolutional neural networks (CNNs), recurrent neural networks (RNNs), long short-term memory (LSTM) networks, and transformer models. Understanding these architectures and their applications in image, text, and sequence data is crucial for building state-of-the-art models."
                },
                "advanced_topic_2": {
                    "topic_name": "Reinforcement Learning",
                    "topic_desc": "Reinforcement learning involves training agents to make decisions by interacting with an environment. Veterans should understand key concepts such as Markov decision processes, Q-learning, policy gradients, and deep reinforcement learning. Implementing RL algorithms using libraries like OpenAI Gym and stable-baselines is essential for solving complex tasks."
                },
                "advanced_topic_3": {
                    "topic_name": "Natural Language Processing (NLP)",
                    "topic_desc": "Advanced NLP techniques involve understanding and generating human language. Veterans should be proficient in working with transformers (e.g., BERT, GPT), sequence-to-sequence models, attention mechanisms, and NLP tasks such as sentiment analysis, machine translation, and text summarization. Using libraries like Hugging Face's Transformers is essential."
                },
                "advanced_topic_4": {
                    "topic_name": "Generative Models",
                    "topic_desc": "Generative models, such as Generative Adversarial Networks (GANs) and Variational Autoencoders (VAEs), are used to generate new data samples that resemble a given dataset. Veterans should understand the architecture and training of GANs and VAEs, and be able to apply these models to tasks such as image generation, data augmentation, and anomaly detection."
                },
                "advanced_topic_5": {
                    "topic_name": "AI Ethics and Fairness",
                    "topic_desc": "As AI systems become more prevalent, understanding and addressing ethical considerations and fairness is crucial. Veterans should explore topics such as bias detection and mitigation, interpretability, transparency, and the societal impacts of AI. Implementing fair and ethical AI practices ensures responsible development and deployment of AI systems."
                }
            }
        },
        gamedev: {
            "beginner": {
                "beginner_topic_1": {
                    "topic_name": "Game Design Principles",
                    "topic_desc": "Understanding game design principles is essential for beginners. This includes learning about game mechanics, player engagement, level design, and storytelling. Familiarity with concepts such as balance, pacing, and feedback loops is crucial for creating compelling and enjoyable games."
                },
                "beginner_topic_2": {
                    "topic_name": "Basic Programming for Game Development",
                    "topic_desc": "Beginners should start with learning a programming language commonly used in game development, such as C# for Unity or C++ for Unreal Engine. Understanding basic programming concepts, including variables, control structures, functions, and object-oriented programming, is essential for scripting game behavior."
                },
                "beginner_topic_3": {
                    "topic_name": "Introduction to Game Engines",
                    "topic_desc": "Familiarity with game engines like Unity or Unreal Engine is vital for beginners. Learning how to navigate the interface, create and manipulate game objects, and implement basic game logic using the engine's built-in tools and scripting languages is essential for developing games."
                },
                "beginner_topic_4": {
                    "topic_name": "2D and 3D Graphics Basics",
                    "topic_desc": "Understanding the basics of 2D and 3D graphics is important for game development. Beginners should learn about sprites, textures, materials, and basic 3D modeling. Knowledge of how to import and manipulate graphical assets in a game engine is crucial for creating visually appealing games."
                }
            },
            "advanced": {
                "advanced_topic_1": {
                    "topic_name": "Advanced Game Physics",
                    "topic_desc": "Veterans should master advanced game physics concepts, including rigid body dynamics, collision detection and response, soft body physics, and fluid dynamics. Implementing realistic physics simulations enhances the immersion and interactivity of games."
                },
                "advanced_topic_2": {
                    "topic_name": "Artificial Intelligence in Games",
                    "topic_desc": "AI plays a crucial role in creating challenging and engaging game experiences. Veterans should understand advanced AI techniques such as pathfinding algorithms (e.g., A*), decision trees, finite state machines, behavior trees, and machine learning applications in games. Implementing sophisticated AI enhances NPC behavior and game dynamics."
                },
                "advanced_topic_3": {
                    "topic_name": "Multiplayer and Network Programming",
                    "topic_desc": "Developing multiplayer games requires knowledge of network programming. Veterans should understand concepts such as client-server architecture, synchronization, latency compensation, and security in online games. Implementing robust networking solutions ensures smooth and fair multiplayer experiences."
                },
                "advanced_topic_4": {
                    "topic_name": "Procedural Content Generation",
                    "topic_desc": "Procedural content generation (PCG) involves using algorithms to create game content dynamically. Veterans should explore techniques for generating levels, terrain, textures, and game assets procedurally. Implementing PCG enhances replayability and reduces manual content creation efforts."
                },
                "advanced_topic_5": {
                    "topic_name": "Advanced Graphics and Rendering Techniques",
                    "topic_desc": "Veterans should master advanced graphics techniques such as real-time ray tracing, global illumination, shaders, and post-processing effects. Understanding how to optimize rendering performance and implement cutting-edge visual effects is crucial for creating visually stunning games."
                }
            }
        },
        androiddev: {
            "beginner": {
                "beginner_topic_1": {
                    "topic_name": "Android Studio and SDK",
                    "topic_desc": ""
                },
                "beginner_topic_2": {
                    "topic_name": "Java/Kotlin Basics",
                    "topic_desc": ""
                },
                "beginner_topic_3": {
                    "topic_name": "User Interface Design",
                    "topic_desc": ""
                },
                "beginner_topic_4": {
                    "topic_name": "Activity and Fragment Lifecycle",
                    "topic_desc": ""
                }
            },
            "advanced": {
                "advanced_topic_1": {
                    "topic_name": "Advanced UI/UX Design",
                    "topic_desc": ""
                },
                "advanced_topic_2": {
                    "topic_name": "Performance Optimization",
                    "topic_desc": ""
                },
                "advanced_topic_3": {
                    "topic_name": "Dependency Injection with Dagger/Hilt",
                    "topic_desc": ""
                },
                "advanced_topic_4": {
                    "topic_name": "Reactive Programming with RxJava/Coroutines",
                    "topic_desc": ""
                },
                "advanced_topic_5": {
                    "topic_name": "Building and Integrating RESTful APIs",
                    "topic_desc": ""
                }
            }
        },
        softwaredev: {
            "windows": {
                "beginner": {
                    "beginner_topic_1": {
                        "topic_name": "Visual Studio IDE",
                        "topic_desc": ""
                    },
                    "beginner_topic_2": {
                        "topic_name": "C# and .NET Framework",
                        "topic_desc": ""
                    },
                    "beginner_topic_3": {
                        "topic_name": "Windows API",
                        "topic_desc": ""
                    },
                    "beginner_topic_4": {
                        "topic_name": "Basic PowerShell Scripting",
                        "topic_desc": ""
                    }
                },
                "advanced": {
                    "advanced_topic_1": {
                        "topic_name": "Windows Presentation Foundation (WPF)",
                        "topic_desc": ""
                    },
                    "advanced_topic_2": {
                        "topic_name": "Windows Communication Foundation (WCF)",
                        "topic_desc": ""
                    },
                    "advanced_topic_3": {
                        "topic_name": "UWP and Modern Windows Apps",
                        "topic_desc": ""
                    },
                    "advanced_topic_4": {
                        "topic_name": "Advanced PowerShell and Automation",
                        "topic_desc": ""
                    },
                    "advanced_topic_5": {
                        "topic_name": "Debugging and Profiling Tools",
                        "topic_desc": ""
                    }
                }
            },
            "linux": {
                "beginner": {
                    "beginner_topic_1": {
                        "topic_name": "Command Line Basics",
                        "topic_desc": ""
                    },
                    "beginner_topic_2": {
                        "topic_name": "Shell Scripting",
                        "topic_desc": ""
                    },
                    "beginner_topic_3": {
                        "topic_name": "File System and Permissions",
                        "topic_desc": ""
                    },
                    "beginner_topic_4": {
                        "topic_name": "Package Management",
                        "topic_desc": ""
                    }
                },
                "advanced": {
                    "advanced_topic_1": {
                        "topic_name": "Kernel Module Programming",
                        "topic_desc": ""
                    },
                    "advanced_topic_2": {
                        "topic_name": "System Call Interface",
                        "topic_desc": ""
                    },
                    "advanced_topic_3": {
                        "topic_name": "Advanced Shell Scripting",
                        "topic_desc": ""
                    },
                    "advanced_topic_4": {
                        "topic_name": "Linux Security and SELinux",
                        "topic_desc": ""
                    },
                    "advanced_topic_5": {
                        "topic_name": "Containerization with Docker",
                        "topic_desc": ""
                    }
                }
            },
            "macos": {
                "beginner": {
                    "beginner_topic_1": {
                        "topic_name": "Xcode and Interface Builder",
                        "topic_desc": ""
                    },
                    "beginner_topic_2": {
                        "topic_name": "Swift Programming Basics",
                        "topic_desc": ""
                    },
                    "beginner_topic_3": {
                        "topic_name": "Cocoa and Cocoa Touch",
                        "topic_desc": ""
                    },
                    "beginner_topic_4": {
                        "topic_name": "Basic AppleScript",
                        "topic_desc": ""
                    }
                },
                "advanced": {
                    "advanced_topic_1": {
                        "topic_name": "Advanced Swift and Objective-C",
                        "topic_desc": ""
                    },
                    "advanced_topic_2": {
                        "topic_name": "Core Data and Persistence",
                        "topic_desc": ""
                    },
                    "advanced_topic_3": {
                        "topic_name": "Metal and Advanced Graphics",
                        "topic_desc": ""
                    },
                    "advanced_topic_4": {
                        "topic_name": "macOS Security and Keychain",
                        "topic_desc": ""
                    },
                    "advanced_topic_5": {
                        "topic_name": "Integrating with iCloud and Continuity",
                        "topic_desc": ""
                    }
                }
            }
        },
        iPhoneDev: {
            "beginner": {
                "beginner_topic_1": {
                    "topic_name": "Xcode Basics",
                    "topic_desc": ""
                },
                "beginner_topic_2": {
                    "topic_name": "Swift Programming Basics",
                    "topic_desc": ""
                },
                "beginner_topic_3": {
                    "topic_name": "UIKit Fundamentals",
                    "topic_desc": ""
                },
                "beginner_topic_4": {
                    "topic_name": "Auto Layout and Storyboards",
                    "topic_desc": ""
                }
            },
            "advanced": {
                "advanced_topic_1": {
                    "topic_name": "Advanced Swift and Concurrency",
                    "topic_desc": ""
                },
                "advanced_topic_2": {
                    "topic_name": "Custom UI Components and Animations",
                    "topic_desc": ""
                },
                "advanced_topic_3": {
                    "topic_name": "Core Data and Data Persistence",
                    "topic_desc": ""
                },
                "advanced_topic_4": {
                    "topic_name": "Network Programming with URLSession",
                    "topic_desc": ""
                },
                "advanced_topic_5": {
                    "topic_name": "Integrating with SwiftUI and Combine",
                    "topic_desc": ""
                }
            }
        },
        technology: {
            assembly: {
                title: "Assembly x86",
                description: "program",
                imgSrc: "#",
            },
        },
    }
}

