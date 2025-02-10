import { useEffect, useState } from "react"

export const useCarouselBanner = (length) => {
    const [counterSlideBanner, setCounterSlideBanner] = useState(0)

    const nextSlideBanner = () => {
        setCounterSlideBanner((prevCounter) => (prevCounter + 1) % length)
    }

    const prevSlideBanner = () => {
        setCounterSlideBanner((prevCounter) => (prevCounter - 1 + length) % length)
    }

    return { counterSlideBanner, nextSlideBanner, prevSlideBanner }
}

export function useCarouselLancamentos(length) {
    const [counterSlideLancamentos, setCounterSlideLancamentos] = useState(0);
    const [slidesPerView, setSlidesPerView] = useState(getSlidesPerView());

    useEffect(() => {
        const handleResize = () => {
            setSlidesPerView(getSlidesPerView());
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    // Função para determinar quantos slides exibir com base na largura
    function getSlidesPerView() {
        const width = window.innerWidth;
        if (width <= 430) return 1; // Mobile: 1 slide
        if (width <= 630) return 2; // Tablets pequenos: 2 slides
        return 3; // Desktop e tablets grandes: 3 slides
    }

    const nextSlideLancamentos = () => {
        setCounterSlideLancamentos((prevCounter) =>
            prevCounter + slidesPerView < length ? prevCounter + slidesPerView : 0
        );
    };

    const prevSlideLancamentos = () => {
        setCounterSlideLancamentos((prevCounter) =>
            prevCounter - slidesPerView >= 0
                ? prevCounter - slidesPerView
                : length - (length % slidesPerView || slidesPerView)
        );
    };

    return { counterSlideLancamentos, nextSlideLancamentos, prevSlideLancamentos };
}

export function useCarouselPromocoes(length) {
    const [counterSlidePromocoes, setCounterSlidePromocoes] = useState(0);
    const [slidesPerView, setSlidesPerView] = useState(getSlidesPerView());

    useEffect(() => {
        const handleResize = () => {
            setSlidesPerView(getSlidesPerView());
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    // Função para determinar quantos slides exibir com base na largura
    function getSlidesPerView() {
        const width = window.innerWidth;
        if (width <= 430) return 1; // Mobile: 1 slide
        if (width <= 630) return 2; // Tablets pequenos: 2 slides
        return 3; // Desktop e tablets grandes: 3 slides
    }

    const nextSlidePromocoes = () => {
        setCounterSlidePromocoes((prevCounter) =>
            prevCounter + slidesPerView < length ? prevCounter + slidesPerView : 0
        );
    };

    const prevSlidePromocoes = () => {
        setCounterSlidePromocoes((prevCounter) =>
            prevCounter - slidesPerView >= 0
                ? prevCounter - slidesPerView
                : length - (length % slidesPerView || slidesPerView)
        );
    };

    return { counterSlidePromocoes, nextSlidePromocoes, prevSlidePromocoes };
}

export const useCarouselAlfaiataria = (length) => {
    const [counterSlideAlfaiataria, setCounterSlideAlfaiataria] = useState(0)
    const [slidesPerView, setSlidesPerView] = useState(getSlidesPerView());

    useEffect(() => {
        const handleResize = () => {
            setSlidesPerView(getSlidesPerView());
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    // Função para determinar quantos slides exibir com base na largura
    function getSlidesPerView() {
        const width = window.innerWidth;
        if (width <= 430) return 1; // Mobile: 1 slide
        if (width <= 630) return 2; // Tablets pequenos: 2 slides
        return 3; // Desktop e tablets grandes: 3 slides
    }

    const nextSlideAlfaiataria = () => {
        setCounterSlideAlfaiataria((prevCounter) =>
            prevCounter + slidesPerView < length ? prevCounter + slidesPerView : 0
        );
    };

    const prevSlideAlfaiataria = () => {
        setCounterSlideAlfaiataria((prevCounter) =>
            prevCounter - slidesPerView >= 0
                ? prevCounter - slidesPerView
                : length - (length % slidesPerView || slidesPerView)
        );
    };

    return { counterSlideAlfaiataria, nextSlideAlfaiataria, prevSlideAlfaiataria }
}

export const useCarouselJeans = (length) => {
    const [counterSlideJeans, setCounterSlideJeans] = useState(0)
    const [slidesPerView, setSlidesPerView] = useState(getSlidesPerView());

    useEffect(() => {
        const handleResize = () => {
            setSlidesPerView(getSlidesPerView());
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    // Função para determinar quantos slides exibir com base na largura
    function getSlidesPerView() {
        const width = window.innerWidth;
        if (width <= 430) return 1; // Mobile: 1 slide
        if (width <= 630) return 2; // Tablets pequenos: 2 slides
        return 3; // Desktop e tablets grandes: 3 slides
    }

    const nextSlideJeans = () => {
        setCounterSlideJeans((prevCounter) =>
            prevCounter + slidesPerView < length ? prevCounter + slidesPerView : 0
        );
    };

    const prevSlideJeans = () => {
        setCounterSlideJeans((prevCounter) =>
            prevCounter - slidesPerView >= 0
                ? prevCounter - slidesPerView
                : length - (length % slidesPerView || slidesPerView)
        );
    };

    return { counterSlideJeans, nextSlideJeans, prevSlideJeans }
}

export const useCarouselMacaquinhos = (length) => {
    const [counterSlideMacaquinhos, setCounterSlideMacaquinhos] = useState(0)
    const [slidesPerView, setSlidesPerView] = useState(getSlidesPerView());

    useEffect(() => {
        const handleResize = () => {
            setSlidesPerView(getSlidesPerView());
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    // Função para determinar quantos slides exibir com base na largura
    function getSlidesPerView() {
        const width = window.innerWidth;
        if (width <= 430) return 1; // Mobile: 1 slide
        if (width <= 630) return 2; // Tablets pequenos: 2 slides
        return 3; // Desktop e tablets grandes: 3 slides
    }

    const nextSlideMacaquinhos = () => {
        setCounterSlideMacaquinhos((prevCounter) =>
            prevCounter + slidesPerView < length ? prevCounter + slidesPerView : 0
        );
    };

    const prevSlideMacaquinhos = () => {
        setCounterSlideMacaquinhos((prevCounter) =>
            prevCounter - slidesPerView >= 0
                ? prevCounter - slidesPerView
                : length - (length % slidesPerView || slidesPerView)
        );
    };

    return { counterSlideMacaquinhos, nextSlideMacaquinhos, prevSlideMacaquinhos }
}

export const useCarouselConjuntos = (length) => {
    const [counterSlideConjuntos, setCounterSlideConjuntos] = useState(0)
    const [slidesPerView, setSlidesPerView] = useState(getSlidesPerView());

    useEffect(() => {
        const handleResize = () => {
            setSlidesPerView(getSlidesPerView());
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    // Função para determinar quantos slides exibir com base na largura
    function getSlidesPerView() {
        const width = window.innerWidth;
        if (width <= 430) return 1; // Mobile: 1 slide
        if (width <= 630) return 2; // Tablets pequenos: 2 slides
        return 3; // Desktop e tablets grandes: 3 slides
    }

    const nextSlideConjuntos = () => {
        setCounterSlideConjuntos((prevCounter) =>
            prevCounter + slidesPerView < length ? prevCounter + slidesPerView : 0
        );
    };

    const prevSlideConjuntos = () => {
        setCounterSlideConjuntos((prevCounter) =>
            prevCounter - slidesPerView >= 0
                ? prevCounter - slidesPerView
                : length - (length % slidesPerView || slidesPerView)
        );
    };

    return { counterSlideConjuntos, nextSlideConjuntos, prevSlideConjuntos }
}

export const useCarouselVestidos = (length) => {
    const [counterSlideVestidos, setCounterSlideVestidos] = useState(0)
    const [slidesPerView, setSlidesPerView] = useState(getSlidesPerView());

    useEffect(() => {
        const handleResize = () => {
            setSlidesPerView(getSlidesPerView());
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    // Função para determinar quantos slides exibir com base na largura
    function getSlidesPerView() {
        const width = window.innerWidth;
        if (width <= 430) return 1; // Mobile: 1 slide
        if (width <= 630) return 2; // Tablets pequenos: 2 slides
        return 3; // Desktop e tablets grandes: 3 slides
    }

    const nextSlideVestidos = () => {
        setCounterSlideVestidos((prevCounter) =>
            prevCounter + slidesPerView < length ? prevCounter + slidesPerView : 0
        );
    };

    const prevSlideVestidos = () => {
        setCounterSlideVestidos((prevCounter) =>
            prevCounter - slidesPerView >= 0
                ? prevCounter - slidesPerView
                : length - (length % slidesPerView || slidesPerView)
        );
    };

    return { counterSlideVestidos, nextSlideVestidos, prevSlideVestidos }
}

export const useCarouselShorts = (length) => {
    const [counterSlideShorts, setCounterSlideShorts] = useState(0)
    const [slidesPerView, setSlidesPerView] = useState(getSlidesPerView());

    useEffect(() => {
        const handleResize = () => {
            setSlidesPerView(getSlidesPerView());
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    // Função para determinar quantos slides exibir com base na largura
    function getSlidesPerView() {
        const width = window.innerWidth;
        if (width <= 430) return 1; // Mobile: 1 slide
        if (width <= 630) return 2; // Tablets pequenos: 2 slides
        return 3; // Desktop e tablets grandes: 3 slides
    }

    const nextSlideShorts = () => {
        setCounterSlideShorts((prevCounter) =>
            prevCounter + slidesPerView < length ? prevCounter + slidesPerView : 0
        );
    };

    const prevSlideShorts = () => {
        setCounterSlideShorts((prevCounter) =>
            prevCounter - slidesPerView >= 0
                ? prevCounter - slidesPerView
                : length - (length % slidesPerView || slidesPerView)
        );
    };

    return { counterSlideShorts, nextSlideShorts, prevSlideShorts }
}

export const useCarouselAcessorios = (length) => {
    const [counterSlideAcessorios, setCounterSlideAcessorios] = useState(0)
    const [slidesPerView, setSlidesPerView] = useState(getSlidesPerView());

    useEffect(() => {
        const handleResize = () => {
            setSlidesPerView(getSlidesPerView());
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    // Função para determinar quantos slides exibir com base na largura
    function getSlidesPerView() {
        const width = window.innerWidth;
        if (width <= 430) return 1; // Mobile: 1 slide
        if (width <= 630) return 2; // Tablets pequenos: 2 slides
        return 3; // Desktop e tablets grandes: 3 slides
    }

    const nextSlideAcessorios = () => {
        setCounterSlideAcessorios((prevCounter) =>
            prevCounter + slidesPerView < length ? prevCounter + slidesPerView : 0
        );
    };

    const prevSlideAcessorios = () => {
        setCounterSlideAcessorios((prevCounter) =>
            prevCounter - slidesPerView >= 0
                ? prevCounter - slidesPerView
                : length - (length % slidesPerView || slidesPerView)
        );
    };

    return { counterSlideAcessorios, nextSlideAcessorios, prevSlideAcessorios }
}

export const useCarouselCollabs = (length) => {
    const [counterSlideCollabs, setCounterSlideCollabs] = useState(0)
    const [slidesPerView, setSlidesPerView] = useState(getSlidesPerView());

    useEffect(() => {
        const handleResize = () => {
            setSlidesPerView(getSlidesPerView());
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    // Função para determinar quantos slides exibir com base na largura
    function getSlidesPerView() {
        const width = window.innerWidth;
        if (width <= 430) return 1; // Mobile: 1 slide
        if (width <= 630) return 2; // Tablets pequenos: 2 slides
        return 3; // Desktop e tablets grandes: 3 slides
    }

    const nextSlideCollabs = () => {
        setCounterSlideCollabs((prevCounter) =>
            prevCounter + slidesPerView < length ? prevCounter + slidesPerView : 0
        );
    };

    const prevSlideCollabs = () => {
        setCounterSlideCollabs((prevCounter) =>
            prevCounter - slidesPerView >= 0
                ? prevCounter - slidesPerView
                : length - (length % slidesPerView || slidesPerView)
        );
    };

    return { counterSlideCollabs, nextSlideCollabs, prevSlideCollabs }
}