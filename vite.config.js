import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                // Главная
                main: resolve(__dirname, 'index.html'),

                // Контакты и агентство
                contact: resolve(__dirname, 'pages/contact.html'),
                agency: resolve(__dirname, 'pages/agency.html'),
                // team: resolve(__dirname, 'pages/about/team.html'),
                // careers: resolve(__dirname, 'pages/about/careers.html'),
                // awards: resolve(__dirname, 'pages/about/awards.html'),

                // Кейсы и блог
                cases: resolve(__dirname, 'pages/cases/cases.html'),
                caseDetail: resolve(__dirname, 'pages/cases/article.html'), // если есть
                blog: resolve(__dirname, 'pages/blog/blog.html'),
                blogDetail: resolve(__dirname, 'pages/blog/article.html'), // если есть

                // SEO-продвижение
                seoMain: resolve(__dirname, 'pages/services/seo/index.html'),
                seoYandex: resolve(__dirname, 'pages/services/seo/Продвижение-по-Яндексу.html'),
                seoGoogle: resolve(__dirname, 'pages/services/seo/Продвижение-по-Google.html'),
                seoPositions: resolve(__dirname, 'pages/services/seo/Продвижение-по-позициям.html'),
                seoTraffic: resolve(__dirname, 'pages/services/seo/Продвижение-по-трафику.html'),
                seoTilda: resolve(__dirname, 'pages/services/seo/Tilda.html'),

                // Контекстная реклама
                contextualMain: resolve(__dirname, 'pages/services/contextual-advertising/index.html'),
                googleAds: resolve(__dirname, 'pages/services/contextual-advertising/GoogleAds.html'),
                yandexDirect: resolve(__dirname, 'pages/services/contextual-advertising/ЯндексДирект.html'),

                // Таргетированная реклама
                targetedMain: resolve(__dirname, 'pages/services/targeted-advertising/index.html'),
                vkAds: resolve(__dirname, 'pages/services/targeted-advertising/ВКРекламе.html'),
                odnoklassniki: resolve(__dirname, 'pages/services/targeted-advertising/Одноклассники.html'),
                telegramAds: resolve(__dirname, 'pages/services/targeted-advertising/TelegramAds.html'),
                mtsMarketolog: resolve(__dirname, 'pages/services/targeted-advertising/МТСМаркетолог.html'),
                beelineBiz: resolve(__dirname, 'pages/services/targeted-advertising/БилайнБизнес.html'),

                // Медийная реклама
                mediaMain: resolve(__dirname, 'pages/services/media-advertising/index.html'),
                yandexMedia: resolve(__dirname, 'pages/services/media-advertising/СервисыЯндекс.html'),
                avito: resolve(__dirname, 'pages/services/media-advertising/Авито.html'),
                sberAds: resolve(__dirname, 'pages/services/media-advertising/SberAds.html'),
                ozonPerformance: resolve(__dirname, 'pages/services/media-advertising/OzonPerformance.html'),
                digitalOutdoor: resolve(__dirname, 'pages/services/media-advertising/Наружная-цифровая-реклама.html'),
                programmatic: resolve(__dirname, 'pages/services/media-advertising/Programmatic-реклама.html'),

                // Дизайн
                designMain: resolve(__dirname, 'pages/services/design/index.html'),
                designCards: resolve(__dirname, 'pages/services/design/marketplace-cards.html'),
                designBanners: resolve(__dirname, 'pages/services/design/banners.html'),
                designPresentation: resolve(__dirname, 'pages/services/design/presentation.html'),

                // Аудиты
                auditMain: resolve(__dirname, 'pages/services/audit/index.html'),
                auditSeo: resolve(__dirname, 'pages/services/audit/seo-audit.html'),
                auditAds: resolve(__dirname, 'pages/services/audit/ads-audit.html'),
                auditTech: resolve(__dirname, 'pages/services/audit/tech-audit.html'),
                auditUsability: resolve(__dirname, 'pages/services/audit/usability-audit.html'),
                auditCommercial: resolve(__dirname, 'pages/services/audit/commercial-audit.html'),

                // Комплексное продвижение
                strategy: resolve(__dirname, 'pages/services/comprehensive-promotion/index.html'),
                // Общие страницы
                allServices: resolve(__dirname, 'pages/services/all-services.html'),
                // Технические страницы
                consent: resolve(__dirname, 'pages/tech-pages/consent.html'),
                privacy: resolve(__dirname, 'pages/tech-pages/privacy-policy.html'),
                cookies: resolve(__dirname, 'pages/tech-pages/cookies.html'),
                error: resolve(__dirname, 'pages/tech-pages/error.html'),
            },
        },
    },
});
