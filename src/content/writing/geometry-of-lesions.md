---
title: "The Geometry of Lesions: Laplace-Beltrami Spectra and Shape-DNA in Neuroimaging"
description: "How differential geometry and spectral graph theory reveal occult morphometric signatures in pediatric multiple sclerosis lesions beyond simple volumetric counts."
date: 2026-07-20
category: "ai-research"
tags: ["Medical AI", "Differential Geometry", "Laplace-Beltrami", "MICCAI 2026", "Neuroimaging"]
featured: true
readingTime: "8 min read"
language: "en"
coverImage: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&w=1200&q=80"
epigraph: "Nature operates through shape and curvature before it ever learns to count volume."
---

In conventional neuroimaging analysis of paediatric-onset multiple sclerosis, clinical evaluation frequently relies on crude volumetric metrics: total lesion volume (TLV) and raw lesion count. 

However, two lesions possessing identical spatial volumes can exhibit drastically divergent pathological behaviors: one may be an aggressive, infiltrative plaque with jagged, high-curvature boundaries, while the other is a quiescent, spherical periventricular scar.

In our MICCAI 2026 PIPPI workshop paper, we demonstrate how **Shape-DNA spectral analysis** allows us to characterize these occult morphological signatures using intrinsic differential geometry.

### The Laplace-Beltrami Operator

Let $\mathcal{M}$ represent a 2-dimensional Riemannian 2-manifold (the reconstructed triangular mesh of a 3D lesion surface obtained via Marching Cubes). The Laplace–Beltrami operator $\Delta$ acts on smooth functions $f: \mathcal{M} \to \mathbb{R}$:

$$\Delta f = \operatorname{div}(\nabla f)$$

We solve the Helmholtz eigenvalue problem (Dirichlet / Neumann boundary conditions):

$$\Delta f + \lambda f = 0$$

The resulting discrete spectrum:

$$\Lambda = \{ 0 \le \lambda_1 \le \lambda_2 \le \dots \le \lambda_k \}$$

forms an isometry-invariant fingerprint—the **Shape-DNA** of the lesion geometry.

### Python / PyTorch Implementation Snippet

Below is an excerpt illustrating the discrete cotangent-weight Laplacian matrix computation on triangulated lesion surfaces:

```python
import torch
import numpy as np

def compute_cotangent_laplacian(vertices: torch.Tensor, faces: torch.Tensor):
    """
    Computes the discrete Laplace-Beltrami operator via cotangent weights.
    vertices: (V, 3) tensor of mesh coordinates
    faces: (F, 3) tensor of triangular face vertex indices
    """
    v0 = vertices[faces[:, 0]]
    v1 = vertices[faces[:, 1]]
    v2 = vertices[faces[:, 2]]

    # Edge vectors
    e0 = v2 - v1
    e1 = v0 - v2
    e2 = v1 - v0

    # Cross products for triangle areas
    cross = torch.cross(e0, e1, dim=-1)
    areas = 0.5 * torch.norm(cross, dim=-1)

    # Cotangent weights
    cot0 = torch.sum(-e1 * e2, dim=-1) / (2.0 * areas)
    cot1 = torch.sum(-e2 * e0, dim=-1) / (2.0 * areas)
    cot2 = torch.sum(-e0 * e1, dim=-1) / (2.0 * areas)

    return {"cotangents": (cot0, cot1, cot2), "areas": areas}
```

By decoupling metric distortions from shape topography, spectral analysis equips clinical researchers with predictive biomarkers that correlate far more tightly with cognitive disability scores than classical MRI volume metrics.
