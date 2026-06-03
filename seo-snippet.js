// Single-file SEO snippet (CONFIG + META_DATA + LD_DATA + runtime)

(function () {
  "use strict";


  const CONFIG = {
    baseUrlFallback: "https://www.chartreusecircletherapy.com",
    googleSiteVerification: ""
  };

  // === DATA (from your previous meta-tags.js) ===
  const META_DATA = {"meta_tags_list":[{"page_url":"https://www.chartreusecircletherapy.com/","title_tag":"PTSD Therapy Asheville & Trauma Counseling | Chartreuse Circle","meta_description":"Licensed therapist offering PTSD therapy, trauma counseling, addiction recovery, depression and anxiety treatment in Asheville. Personalized therapy for emotional healing."},{"page_url":"https://www.chartreusecircletherapy.com/about-5","title_tag":"Licensed Therapist Asheville & PTSD Therapy | Chartreuse Circle","meta_description":"Licensed therapist in Asheville specializing in PTSD, trauma, addiction recovery, depression and anxiety. Personalized therapy to support deep, lasting emotional healing."},{"page_url":"https://www.chartreusecircletherapy.com/contact-7","title_tag":"Licensed Therapist Asheville | Contact Chartreuse Circle","meta_description":"Contact a licensed therapist in Asheville for PTSD therapy, trauma counseling, addiction recovery, depression and anxiety treatment. Schedule your personalized therapy consult."},{"page_url":"https://www.chartreusecircletherapy.com/areas-of-expertise","title_tag":"Addiction Recovery & Trauma Counseling Asheville | Chartreuse Circle","meta_description":"Addiction recovery, PTSD therapy, trauma-informed counseling, depression and anxiety treatment in Asheville. Evidence-based, personalized therapy for emotional healing."}],"keywords":["PTSD Therapy Asheville","Addiction Recovery Asheville","Trauma Counseling Asheville","Depression Treatment Asheville","Anxiety Therapy Asheville","Licensed Therapist Asheville","Emotional Healing Asheville","Cognitive Processing Therapy Asheville","Acceptance Commitment Therapy Asheville","Personalized Therapy Asheville","EMDR Therapist Asheville"]};

  // === DATA (from your previous LD.js) ===
  const LD_DATA = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://www.chartreusecircletherapy.com/#localbusiness",
  "name": "Chartreuse Circle Therapy",
  "url": "https://www.chartreusecircletherapy.com/",
  "image": [
    "https://static.wixstatic.com/media/175413_20d9688fc31b46b5a1a185c8345e39c5~mv2.png/v1/fill/w_242,h_242,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Chartreuse%20(8).png",
    "https://static.wixstatic.com/media/175413_83bfee246ee5486186c180b85de9e1b9~mv2.jpg/v1/fill/w_122,h_140,al_c,q_80,usm_0.66_1.00_0.01,blur_2,enc_avif,quality_auto/175413_83bfee246ee5486186c180b85de9e1b9~mv2.jpg",
    "https://static.wixstatic.com/media/d0220c_ceee9b0479c7416c88711f8cdd9918af~mv2_d_2451_1957_s_2.jpg/v1/fill/w_123,h_98,al_c,q_80,usm_0.66_1.00_0.01,blur_2,enc_avif,quality_auto/d0220c_ceee9b0479c7416c88711f8cdd9918af~mv2_d_2451_1957_s_2.jpg"
  ],
  "description": "Chartreuse Circle Therapy, led by licensed therapist and addiction specialist Russell Golemon in Asheville, NC, offers trauma-informed therapy for PTSD, complex trauma, addiction, depression, and anxiety using evidence-based approaches including Cognitive Processing Therapy (CPT) and Acceptance and Commitment Therapy (ACT).",
  "telephone": "601-329-6311",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "802 Fairview Rd. Suite 600",
    "addressLocality": "Asheville",
    "addressRegion": "NC",
    "postalCode": "28803",
    "addressCountry": "US"
  },
  "areaServed": {
    "@type": "AdministrativeArea",
    "name": "Asheville, North Carolina"
  },
  "founder": {
    "@type": "Person",
    "name": "Russell Golemon",
    "jobTitle": "Licensed Therapist and Addiction Specialist"
  },
  "sameAs": [],
  "contactPoint": [
    {
      "@type": "ContactPoint",
      "telephone": "601-329-6311",
      "contactType": "customer service",
      "areaServed": "US",
      "availableLanguage": "en"
    },
    {
      "@type": "ContactPoint",
      "telephone": "828-675-7812",
      "contactType": "customer service",
      "areaServed": "US",
      "availableLanguage": "en"
    }
  ],
  "email": "mailto:golemon@gmail.com",
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 35.571,
    "longitude": -82.528
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Therapeutic Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Trauma and PTSD Therapy",
          "description": "Individual therapy for adults (17+) focused on PTSD, complex trauma, and related symptoms, using evidence-based, trauma-informed approaches to help clients reclaim safety, connection, and joy."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Addiction and Substance Use Counseling",
          "description": "Specialized therapy for individuals struggling with addiction and substance use challenges, integrating the therapist's addiction specialization and personal recovery experience."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Depression and Anxiety Therapy",
          "description": "Therapeutic support for adults dealing with depression and anxiety, focused on moving beyond survival mode to a life that feels safe, connected, and purposeful."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Cognitive Processing Therapy (CPT)",
          "description": "Evidence-based treatment that helps clients identify distorted thinking, challenge trauma-related beliefs, and reclaim control by rewriting the story trauma left behind."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Acceptance and Commitment Therapy (ACT)",
          "description": "Therapy that teaches radical acceptance, defuses harmful thoughts, and helps clients live in alignment with their values so they can build meaningful lives beyond pain."
        }
      }
    ]
  }
};

  /* ===== Helpers ===== */
  function clamp(str, max) {
    if (typeof str !== "string") str = String(str ?? "");
    return str.length <= max ? str : str.slice(0, Math.max(0, max - 1)) + "…";
  }

  function stripTrailingSlash(p) {
    if (!p) return "/";
    return p.length > 1 && p.endsWith("/") ? p.slice(0, -1) : p;
  }

  function normalizePathFromUrl(url) {
    try {
      const u = new URL(url);
      return stripTrailingSlash(u.pathname || "/");
    } catch {
      const m = String(url || "").match(/^https?:\/\/[^/]+(\/[^?#]*)?/i);
      return stripTrailingSlash((m && m[1]) || "/");
    }
  }

  function removeLangPrefix(pathname) {
    const m = String(pathname || "/").match(
      /^\/([a-z]{2}(?:-[A-Z]{2})?)(?=\/|$)(.*)$/
    );
    if (!m) return pathname || "/";
    const rest = stripTrailingSlash(m[2] || "/");
    return rest || "/";
  }

  function currentPagePath() {
    const path = window.location.pathname || "/";
    return stripTrailingSlash(path || "/");
  }

  function currentKeyCandidates() {
    const path = currentPagePath();
    const origin = (window.location.origin || "").replace(/\/$/, "");
    const full = origin + path;

    if (path === "/") {
      return [full, "/"];
    }

    const noLang = removeLangPrefix(path);
    return [full, path, stripTrailingSlash(path), noLang, stripTrailingSlash(noLang)];
  }

  function buildIndex(metaJson) {
    const list = (metaJson && metaJson.meta_tags_list) || [];
    const index = {};
    for (const item of list) {
      const path = normalizePathFromUrl(item.page_url);
      let origin = "";
      try {
        origin = new URL(item.page_url).origin;
      } catch {
        origin = "";
      }
      const full = origin ? origin.replace(/\/$/, "") + path : "";

      const entry = {
        title: item.title_tag || "",
        description: item.meta_description || "",
      };

      index[path] = entry;
      index[stripTrailingSlash(path)] = entry;
      if (full) index[full] = entry;
    }
    return index;
  }

  function _stripQuotes(s) {
    return String(s ?? "")
      .replace(/["'“”‘’„«»]/g, "")
      .replace(/\s+/g, " ")
      .replace(/^[\s\-–—·,;:]+|[\s\-–—·,;:]+$/g, "")
      .trim();
  }

  function normalizeKeywordsList(input, opts) {
    const { maxKeywords = 20 } = opts || {};
    if (input == null) return [];
    let items = Array.isArray(input)
      ? input.slice()
      : typeof input === "string"
      ? input.split(",")
      : [];
    const seen = new Set();
    return items
      .map(_stripQuotes)
      .filter((s) => s && s.length >= 2)
      .filter((s) => {
        const k = s.toLowerCase();
        if (seen.has(k)) return false;
        seen.add(k);
        return true;
      })
      .slice(0, maxKeywords);
  }

  function normalizeKeywords(input, opts) {
    const { maxKeywords = 20, maxLength = 280 } = opts || {};
    const list = normalizeKeywordsList(input, { maxKeywords });
    const content = list.join(", ");
    return content.length > maxLength ? content.slice(0, maxLength) : content;
  }

  function applyAltFallbacks(keywordsPool) {
    if (!Array.isArray(keywordsPool) || keywordsPool.length === 0) return;
    try {
      const images = Array.from(document.querySelectorAll("img"));
      let i = 0;
      images.forEach((img) => {
        const curAlt = (img.getAttribute("alt") || "").trim().toLowerCase();
        const shouldReplace =
          !curAlt ||
          curAlt.endsWith(".jpg") ||
          curAlt.endsWith(".png") ||
          curAlt === "image" ||
          curAlt === "img";
        if (shouldReplace) {
          img.setAttribute("alt", keywordsPool[i % keywordsPool.length]);
          i++;
        }
      });
    } catch {
      /* ignore */
    }
  }

  function optimizeImages() {
    try {
      const images = Array.from(document.querySelectorAll("img"));
      if ("IntersectionObserver" in window) {
        const io = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const img = entry.target;
              io.unobserve(img);
              // hook for tracking / lazy work if needed
            }
          });
        });
        images.forEach((img, index) => {
          if (index > 0) io.observe(img);
        });
      }
    } catch (err) {
      console.error("Image optimization error:", err);
    }
  }

  function upsertMeta(nameOrProperty, content, useProperty) {
    const selector = useProperty
      ? `meta[property="${nameOrProperty}"]`
      : `meta[name="${nameOrProperty}"]`;
    let el = document.head.querySelector(selector);
    if (!el) {
      el = document.createElement("meta");
      if (useProperty) el.setAttribute("property", nameOrProperty);
      else el.setAttribute("name", nameOrProperty);
      document.head.appendChild(el);
    }
    el.setAttribute("content", content);
  }

  function upsertLink(rel, href) {
    let link = document.head.querySelector(`link[rel="${rel}"]`);
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", rel);
      document.head.appendChild(link);
    }
    link.setAttribute("href", href);
  }

  function injectJsonLd(ldObject) {
    if (!ldObject) return;
    try {
      const existing = Array.from(
        document.head.querySelectorAll('script[type="application/ld+json"]')
      );
      existing.forEach((el) => {
        el.parentNode.removeChild(el);
      });

      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.textContent = JSON.stringify(ldObject);
      document.head.appendChild(script);
    } catch (err) {
      console.error("Error injecting JSON-LD:", err);
    }
  }

  function applyJsonLd() {
    injectJsonLd(LD_DATA);
  }

  function applySeoFromJson() {
    try {
      const metaJson = META_DATA;
      const index = buildIndex(metaJson);

      const path = currentPagePath();
      const isHome = path === "/";

      const fallbackBase =
        (CONFIG && CONFIG.baseUrlFallback) ? CONFIG.baseUrlFallback : "";
      const baseUrl = (window.location.origin || fallbackBase).replace(/\/$/, "");
      const canonicalUrl = baseUrl + path;

      const keys = currentKeyCandidates();
      let entry = null;
      for (const k of keys) {
        if (index[k]) {
          entry = index[k];
          break;
        }
      }

      if (!entry) {
        return normalizeKeywordsList(metaJson.keywords, { maxKeywords: 25 });
      }

      const title = clamp(entry.title, 60);
      const desc = clamp(entry.description, 185);

      document.title = title;

      const metaList = [
        { type: "name", key: "description", content: desc },
        { type: "property", key: "og:url", content: canonicalUrl },
        { type: "name", key: "resource-hints", content: "preload" },
        { type: "name", key: "format-detection", content: "telephone=yes" },
        { type: "name", key: "mobile-web-app-capable", content: "yes" },
        { type: "name", key: "apple-mobile-web-app-capable", content: "yes" },
      ];

      // opcjonalnie dodaj google-site-verification, jeśli jest w CONFIG
      if (CONFIG && CONFIG.googleSiteVerification) {
        metaList.push({
          type: "name",
          key: "google-site-verification",
          content: CONFIG.googleSiteVerification
        });
      }

      if (isHome && metaJson && metaJson.keywords) {
        const kwContent = normalizeKeywords(metaJson.keywords, {
          maxKeywords: 25,
          maxLength: 512,
        });
        if (kwContent) {
          metaList.push({ type: "name", key: "keywords", content: kwContent });
        }
      }

      metaList.forEach((m) => {
        upsertMeta(m.key, m.content, m.type === "property");
      });

      upsertLink("canonical", canonicalUrl);

      return normalizeKeywordsList(metaJson.keywords, { maxKeywords: 25 });
    } catch (err) {
      console.error("Error meta settings:", err);
      return [];
    }
  }

  function initSnippetSEO() {
    const keywordsPool = applySeoFromJson();
    const path = currentPagePath();
    if (path === "/") {
      applyJsonLd();
    }
    optimizeImages();
    applyAltFallbacks(keywordsPool);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initSnippetSEO);
  } else {
    initSnippetSEO();
  }
})();
