import { Project } from "./type.ts";

export const projects: Project[] = [
  {
    id: "fpga-vision-core",
    title: "FPGA Vision Core",
    subtitle: "Real-Time Edge Detection Accelerator",
    shortdescription:
      "An FPGA-accelerated Sobel edge detector for low-latency image processing.",
    longdescription:
      "Designed a hardware accelerator for real-time edge detection using Verilog. Achieved 60+ FPS on 640x480 resolution using a pipelined architecture targeting Intel Cyclone V.",
    year: 2024,
    type: "Hardware Design",
    team: "Solo Project",
    status: "Completed",
    tags: ["FPGA", "Vision", "Edge Detection"],
    tech: ["Verilog", "Quartus", "ModelSim"],
    featured: true,
    codeLink: "https://github.com/yourname/fpga-vision-core",
  },
  {
    id: "gpgpu-core",
    title: "Tiny GPGPU Core",
    subtitle: "SIMT-style General Purpose GPU Design",
    shortdescription:
      "Built a simplified GPGPU core supporting vector arithmetic and shared memory.",
    longdescription:
      "Implemented a small-scale, 4-thread SIMT GPU core supporting basic arithmetic and memory operations with a banked register file. Optimized for minimal area footprint.",
    year: 2025,
    type: "Architecture",
    team: "Solo Project",
    status: "In Progress",
    tags: ["GPGPU", "Computer Architecture", "Parallelism"],
    tech: ["SystemVerilog", "GTKWave", "RISC-V ISA"],
    featured: true,
    codeLink: "https://github.com/yourname/tiny-gpgpu",
  },
  {
    id: "aethersanct",
    title: "AETHERSANCT",
    subtitle: "Psychological Horror Adventure Game",
    shortdescription:
      "Narrative-heavy 2.5D horror game exploring trauma and fragmented memory.",
    longdescription:
      "Unreal Engine-based narrative game where players undergo surreal therapy-like sequences. Designed unique memory recovery mechanics and multiple emotionally-driven endings.",
    year: 2025,
    type: "Game Development",
    team: "Solo Project",
    status: "Ongoing",
    tags: ["Game", "Unreal", "Narrative"],
    tech: ["Unreal Engine 5", "Blueprints", "C++"],
    featured: true,
    demoLink: "https://aethersanct.vercel.app",
  },
  {
    id: "verilog-mesi-sim",
    title: "MESI Cache Protocol Simulator",
    subtitle: "4-core cache coherence protocol implementation",
    shortdescription:
      "Simulated MESI protocol in Verilog for multi-core cache coherence.",
    longdescription:
      "Implemented the MESI protocol across 4 simulated cores with testbench verification. Demonstrated invalidation and sharing behaviors with random access patterns.",
    year: 2025,
    type: "RTL Simulation",
    team: "Research Team",
    status: "Completed",
    tags: ["Cache", "Coherence", "MESI"],
    tech: ["Verilog", "ModelSim", "Python"],
    codeLink: "https://github.com/yourname/mesi-sim",
  },
  {
    id: "llm-dashboard",
    title: "Vision + LLM Dashboard",
    subtitle: "AI-assisted Technical Analysis Interface",
    shortdescription:
      "Built a private dashboard with local LLM + vision model integration.",
    longdescription:
      "Replaced Gemini API with LLaVA and Ollama-based local models for secure financial chart interpretation and report generation.",
    year: 2025,
    type: "AI Tooling",
    team: "Solo Project",
    status: "In Progress",
    tags: ["LLM", "Vision", "Dashboard"],
    tech: ["LLaVA", "Ollama", "Python", "Plotly", "FastAPI"],
    codeLink: "https://github.com/yourname/llm-dashboard",
  },
  {
    id: "model-agnostic-trainer",
    title: "Model-Agnostic Trainer",
    subtitle: "Flexible Hyperparameter Optimization Framework",
    shortdescription:
      "Training pipeline agnostic to model architecture and size.",
    longdescription:
      "Designed a generic pipeline for hyperparameter sweeps using Bayesian search and random grid strategies, supporting PyTorch, Keras, and ONNX models.",
    year: 2024,
    type: "ML Tooling",
    team: "Solo Project",
    status: "Completed",
    tags: ["Training", "Hyperparameter Tuning"],
    tech: ["Python", "Optuna", "WandB", "PyTorch"],
    codeLink: "https://github.com/yourname/model-agnostic-trainer",
  },
  {
    id: "lightweight-crypto-suite",
    title: "Lightweight Crypto Suite",
    subtitle: "Custom Trivium & Simon FPGA Cores",
    shortdescription:
      "Cryptographic core implementations optimized for constrained devices.",
    longdescription:
      "Implemented Trivium and Simon cipher cores in SystemVerilog with area and power constraints in mind. Verified using side-channel resistance benchmarks.",
    year: 2025,
    type: "Security & Hardware",
    team: "Research Team",
    status: "Completed",
    tags: ["Cryptography", "FPGA", "Embedded"],
    tech: ["SystemVerilog", "Vivado", "Python"],
    codeLink: "https://github.com/yourname/lightweight-crypto-suite",
  },
  {
    id: "adaptive-cache",
    title: "Adaptive Cache Simulator",
    subtitle: "Dynamically resizing L1 cache design",
    shortdescription:
      "Simulated an L1 cache with runtime associativity adaptation.",
    longdescription:
      "Designed and tested a cache simulator where the associativity dynamically adapts to access patterns. Reduced miss rate by up to 17% over fixed associativity designs.",
    year: 2023,
    type: "Research Project",
    team: "Research Team",
    status: "Completed",
    tags: ["Cache", "Simulation", "Dynamic Tuning"],
    tech: ["C++", "Python", "Pandas"],
    codeLink: "https://github.com/yourname/adaptive-cache",
  },
  {
    id: "portfolio-v2",
    title: "Portfolio Website V2",
    subtitle: "Interactive and Animated Developer Portfolio",
    shortdescription:
      "Rebuilt portfolio with dynamic routing and motion animations.",
    longdescription:
      "Used Next.js with Framer Motion and Tailwind CSS to create a lightweight, fast-loading portfolio featuring project filters, theme toggle, and featured gallery.",
    year: 2025,
    type: "Web Development",
    team: "Solo Project",
    status: "Completed",
    tags: ["Web", "Portfolio", "Animation"],
    tech: ["Next.js", "Framer Motion", "Tailwind CSS"],
    featured: true,
    demoLink: "https://yourname.vercel.app",
    codeLink: "https://github.com/yourname/portfolio-v2",
  },
  {
    id: "softmax-array",
    title: "Systolic Softmax Accelerator",
    subtitle: "Efficient softmax for transformer inference",
    shortdescription:
      "Designed systolic array-based softmax hardware with precision-aware tuning.",
    longdescription:
      "Built a systolic array implementation of softmax optimized for transformers. Analyzed precision impact on denominator stability and implemented pipelining for throughput.",
    year: 2025,
    type: "Hardware Accelerator",
    team: "Research Team",
    status: "In Progress",
    tags: ["Accelerator", "Transformer", "Systolic Array"],
    tech: ["SystemVerilog", "Vivado", "NumPy", "Matplotlib"],
    featured: false,
  },
];
