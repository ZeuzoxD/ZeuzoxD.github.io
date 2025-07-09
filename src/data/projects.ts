import { Project } from "./type.ts";

export const projects: Project[] = [
  {
    id: "systolic-scheduler-4x4",
    title: "Systolic Scheduler for 4x4 Matrix Multiplication",
    subtitle: "Pipelined Matrix Control with a Systolic Array",
    category: ["Hardware Design", "Digital Design"],
    shortdescription:
      "A Verilog based scheduler for driving a 4x4 systolic array built for efficient matrix multiplication",
    year: 2025,
    type: "Project",
    status: "Completed",
    tags: ["Scheduler", "Systolic Array", "Matrix Multiplication", "RTL"],
    tech: ["Verilog", "GTKWave"],
    featured: true,
    contentBlocks: [
      {
        type: "heading",
        level: 2,
        content: "Project Overview & Goals",
      },
      {
        type: "text",
        content:
          "The systolic scheduler coordinates the data and control flow required to perform matrix multiplication on a 4×4 systolic array. By designing the scheduler as a reusable, modular component in Verilog, it enables pipelined execution.",
      },
      {
        type: "heading",
        level: 3,
        content: "Development Phases",
      },
      {
        type: "list",
        ordered: true,
        items: [
          "<strong>Phase 1:</strong> Standalone Scheduler Design – Developed and tested the scheduler in isolation with a custom testbench. Verified all control and timing signals using GTKWave.",
          "<strong>Phase 2:</strong> Full System Integration – Connected the scheduler to a collaborator’s 4×4 systolic array design. Verified complete matrix multiplication and evaluated correct timing behavior.",
        ],
        styles: "list-decimal pl-5",
      },
      {
        type: "link",
        href: "https://github.com/ZeuzoxD/4x4_systolic-scheduler",
        text: "View the Source Code on GitHub",
        icon: "github",
      },
    ],
  },
  {
    id: "custom-llm-fcc",
    title: "Custom LLM from Scratch in Python",
    subtitle: "Implementing Transformer Architecture from Scratch",
    category: ["LLM", "AIML"],
    shortdescription:
      "Built a minimal Transformer-based language model in Python to deeply understand LLM internals and training dynamics.",
    year: 2024,
    type: "Project",
    status: "Completed",
    tags: ["LLM", "Transformer", "Attention", "Deep Learning", "Python"],
    tech: ["Python", "NumPy", "Pandas", "TensorFlow"],
    featured: false,
    contentBlocks: [
      {
        type: "heading",
        level: 2,
        content: "Project Goal",
      },
      {
        type: "text",
        content:
          "Built a custom bare-bone Transformer model in Python following freecodecamp youtube tutorial. The objective was to implement a Transformer-based LLM from scratch to understand each architectural components. This helped ground future research work in transformer optimization.",
      },
      {
        type: "heading",
        level: 3,
        content: "Reference Architecture",
      },
      {
        type: "link",
        href: "https://arxiv.org/abs/1706.03762",
        text: "Attention Is All You Need (Vaswani et al., 2017)",
        icon: "file-text",
      },
      {
        type: "link",
        href: "https://youtu.be/UU1WVnMk4E8?si=QdR0UzLqE8VuIR4U",
        text: "Create a LLM from Scratch with Python - FreeCodeCamp",
        icon: "youtube",
      },
    ],
  },
  {
    id: "llm-profiling-hpc",
    title: "LLM Performance Profiling",
    subtitle: "Profiling Transformers to Identify Bottlenecks",
    category: ["LLM", "AIML", "Research"],
    shortdescription:
      "Benchmarked a custom LLM and leading models like BERT, BART, and LLaMA 3.1 (8B) to identify transformer bottlenecks and guide hardware-aware optimizations.",
    year: 2024,
    type: "Project",
    status: "Completed",
    tags: ["Benchmarking", "Transformer", "HPC", "Profiling", "MHA", "Thesis"],
    tech: ["PyTorch", "Transformers", "NVIDIA GPU", "Python", "Huggingface"],
    featured: true,
    contentBlocks: [
      {
        type: "heading",
        level: 2,
        content: "Project Objectives",
      },
      {
        type: "text",
        content:
          "To gain deeper insights into Transformer mechanics I built a custom LLM from scratch. The outputs of this model was benchmarked on high-performance systems at <strong>PESU CAVE Labs</strong> and compared against well-established, highly optimized models such as BERT, LAMA and BART to assess baseline performance. And since these results are hardware dependent, its necessary to mention it.",
      },
      {
        type: "heading",
        level: 2,
        content: "Hardware Configuration",
      },
      {
        type: "list",
        ordered: true,
        items: [
          "<strong>Processor:</strong> Intel Core i9-13900k",
          "<strong>Memory:</strong> 128GB DDR5 RAM",
          "<strong>GPU:</strong> NVIDIA RTX 4090 Ti with 24GB VRAM",
        ],
      },
      {
        type: "heading",
        level: 2,
        content: "Inferences",
      },
      {
        type: "text",
        content:
          "In its most untuned, bare-bone state, our custom LLM highlights MHA's high computational demands without any optimizations. By comparison, advanced LLMs (e.g., BERT, LLaMA, BART) use high-performance, optimized libraries that reduce MHA’s resource needs, yet MHA remains inherently resource-intensive, concluding that MHA is the most resource-intensive and also serving as foundational work for my Undergrad Thesis.",
      },
      {
        type: "image",
        src: "/images/projectimgs/llm-profiling/PerformanceBenchmark.png",
        alt: "comparison plot for MHA across models",
        layout: "full-width",
      },
    ],
  },
  {
    id: "riscv-attention-accelerator",
    title: "Accelerating Attention for Embedded RISC-V CPUs",
    subtitle: "Undergraduate Thesis: Enabling SLMs on ultra-efficient hardware",
    category: ["AIML", "Hardware Design", "Research", "LLM", "Digital Design"],
    shortdescription:
      "Designing a hardware-efficient attention accelerator to deploy TinyLLMs on open-source RISC-V CPUs.",
    year: 2025,
    type: "Research",
    status: "Ongoing",
    tags: [
      "Attention",
      "Transformer",
      "RISC-V",
      "Accelerator",
      "Embedded AI",
      "Thesis",
    ],
    tech: ["Bluespec", "Verilog", "RISC-V", "CV32E40P"],
    featured: true,
    contentBlocks: [
      {
        type: "heading",
        level: 2,
        content: "Thesis Overview",
      },
      {
        type: "text",
        content:
          "Guided by <strong>Dr. Sudarshan T S B (Dean of Research, PESU)</strong> and co-guided by <strong>Dr. Pramod Udupa (Intel)</strong>, this thesis investigates low-power transformer deployment. The aim is to design and map an efficient attention mechanism to an embedded open-source RISC-V core (CV32E40P).",
      },
      {
        type: "heading",
        level: 3,
        content: "Work Completed So Far",
      },
      {
        type: "list",
        ordered: true,
        items: [
          "Developed a baseline LLM and profiled Multi-Head Attention (MHA) on high-performance hardware.",
          "Conducted in-depth literature review on sparse attention, systolic architectures, and hardware accelerators.",
          "Selected CV32E40P as the target embedded CPU for accelerator integration.",
        ],
        styles: "list-decimal pl-5 text-gray-300",
      },
    ],
  },
  {
    id: "hyperparameter-optimizer-cuda-openmp",
    title: "Model-Agnostic Hyperparameter Optimization Engine",
    subtitle: "Parallel Random Hyperparameter Search using CUDA and OpenMP",
    category: ["AIML", "HPC", "CUDA"],
    shortdescription:
      "Designed a model-agnostic hyperparameter tuning engine using parallel random search using OpenMP and CUDA",
    year: 2025,
    type: "Project",
    status: "Completed",
    tags: [
      "CUDA",
      "OpenMP",
      "Hyperparameter Tuning",
      "Random Search",
      "System Optimization",
    ],
    tech: ["Python", "CUDA", "OpenMP", "NumPy", "Scikit-learn"],
    featured: false,
    contentBlocks: [
      {
        type: "heading",
        level: 2,
        content: "Parallel Search Architecture",
      },
      {
        type: "text",
        content:
          "The system generates and evaluates hyperparameter combinations using parallel random search. CUDA-enabled GPU threads simultaneously test configurations, while the CPU version uses OpenMP for multi-threading. Results are benchmarked for speed and parameter quality.",
      },
      {
        type: "heading",
        level: 2,
        content: "Project Structure and Execution Flow",
      },
      {
        type: "list",
        ordered: true,
        items: [
          "<strong>Hyperparameter Generation:</strong> A custom C program is used to generate randomized hyperparameter sets for the model.",
          "<strong>Parallel Evaluation:</strong> Each CPU thread (OpenMP) or CUDA thread (GPU) generates one set of parameters and evaluates it using <code>evaluate_xgboost.py</code>.",
          "<strong>Output Storage:</strong> The generated hyperparameters are saved to the <code>params/</code> folder, and their corresponding accuracy scores are written to the <code>results/</code> folder, out of which the hyperparameters with highest accuracy scores is selected.",
          "<strong>Final Model Training:</strong> The selected hyperparameters are used in <code>train_final_model.py</code> to train the final model. This step is <em>not</em> part of the high-performance evaluation but is included for end-to-end demonstration.",
        ],
      },
      {
        type: "heading",
        level: 2,
        content: "Improvements",
      },
      {
        type: "list",
        ordered: false,
        items: [
          "~5× speedup with OpenMP on CPU over serial search.",
          "Up to ~10–12× acceleration on GPU using CUDA.",
          "Demonstrated generalizability across multiple ML models.",
        ],
      },
      {
        type: "link",
        href: "https://github.com/KunalMaverick/HP_Project",
        text: "View the GitHub Repository",
        icon: "github",
      },
    ],
  },
  {
    id: "network-intrusion-detection-nids",
    title: "Network Intrusion Detection System (NIDS)",
    subtitle:
      "Machine learning pipeline for identifying malicious network traffic",
    category: ["AIML"],
    shortdescription:
      "Built a full ML pipeline for detecting intrusions in network traffic using classification models and Bayesian hyperparameter optimization.",
    year: 2025,
    type: "Project",
    status: "Completed",
    tags: [
      "NIDS",
      "Cybersecurity",
      "Machine Learning",
      "Random Forest",
      "Bayesian Optimization",
    ],
    tech: ["Python", "Scikit-learn", "Pandas", "Matplotlib"],
    featured: false,
    contentBlocks: [
      {
        type: "heading",
        level: 2,
        content: "Introduction",
      },
      {
        type: "text",
        content:
          "This project focuses on developing a machine learning-based intrusion detection system to classify network traffic as either normal or potentially malicious. Using a labeled dataset of network activity, various models were trained to identify patterns that distinguish legitimate behavior from attacks.",
      },
      {
        type: "heading",
        level: 2,
        content: "Pipeline Overview",
      },
      {
        type: "list",
        ordered: true,
        items: [
          "<strong>Data Preparation:</strong> Loaded traffic dataset, visualized distribution of normal vs malicious traffic.",
          "<strong>Preprocessing:</strong>  Label encoding, scaling, and splitting for ML compatibility.",
          "<strong>Modeling:</strong> Compared LR, SVM, KNN, Decision Tree, and Random Forest classifiers.",
          "<strong>Optimization:</strong> Applied Bayesian Optimization to improve accuracy of top models.",
          "<strong>Evaluation:</strong> Achieved highest accuracy using Random Forest with tuned parameters.",
        ],
        styles: "list-decimal pl-5 text-gray-300",
      },
      {
        type: "heading",
        level: 3,
        content: "Model Evaluation and Metrics",
      },
      {
        type: "text",
        content:
          "The classification report provided precision, recall, and F1-scores across all traffic types. Evaluation focused on both common and rare attack patterns to assess the model’s generalization.",
      },
      {
        type: "list",
        ordered: false,
        items: [
          "<strong>High-performing classes:</strong> These categories had abundant training data and clear distinguishing features. As a result, they were classified with near-perfect F1-scores.",
          "<strong>Low-performing classes:</strong> These were significantly underrepresented in the dataset. Limited support, overlapping characteristics, and noise in the data made them harder to distinguish, leading to near-zero F1-scores.",
          "<strong>Macro-average F1 score:</strong> This metric was pulled down due to poor performance on the minority classes, which are given equal weight regardless of support.",
          "<strong>Weighted-average F1 score:</strong> This remained high because the model performed well on the dominant classes, which made up the majority of the dataset and influenced the overall score more heavily.",
        ],
        styles: "list-disc pl-5 text-gray-300",
      },
      {
        type: "link",
        href: "https://pitch.com/v/nids-network-intrusion-detection-system-8tzucm",
        text: "Final Report Slides (Pitch.com)",
        icon: "file-text",
      },
      {
        type: "link",
        href: "https://github.com/ZeuzoxD/NIDS",
        text: "View the GitHub Repository",
        icon: "github",
      },
    ],
  },
  {
    id: "fir-filter-verilog",
    title: "FIR Filter Implementations: Basic & Pipelined Architecture",
    subtitle: "Comparing Serial & Parallel FIR Filters in Verilog",
    category: ["Digital Design", "Hardware Design", "Digital Design"],
    shortdescription:
      "Designed a FIR filter in Verilog with both serial and parallel implementations. Compared their performance using waveform simulations.",
    year: 2025,
    type: "Project",
    status: "Completed",
    tags: [
      "FIR",
      "Digital Filter",
      "Verilog",
      "Parallelism",
      "Signal Processing",
    ],
    tech: ["Verilog", "GTKWave", "Icarus Verilog"],
    featured: false,
    contentBlocks: [
      {
        type: "heading",
        level: 2,
        content: "Design Overview",
      },
      {
        type: "text",
        content:
          "This project explores two architectural approaches to implementing a Finite Impulse Response (FIR) filter using Verilog. The first design adopts a traditional serial approach—computing one output sample per clock cycle—while the second leverages parallelism through pipelining, significantly improving throughput and efficiency. Both designs are simulated and verified using GTKWave.",
      },
      {
        type: "heading",
        level: 2,
        content: "System Architecture & Flow",
      },
      {
        type: "list",
        ordered: false,
        items: [
          "<strong>fir_basic.v:</strong> Implements a baseline FIR filter where each multiplication and addition occurs sequentially.",
          "<strong>fir_parallel.v:</strong> A pipelined FIR design that computes results in overlapping stages to increase throughput.",
          "<strong>fir_tb.v:</strong> Unified testbench driving both modules with identical input sequences for waveform comparison.",
        ],
      },
      {
        type: "link",
        href: "https://github.com/ZeuzoxD/parallel-fir",
        text: "Explore the GitHub Repository",
        icon: "github",
      },
    ],
  },
];

export const categories = ["All", "Digital Design", "AIML", "Research"];
