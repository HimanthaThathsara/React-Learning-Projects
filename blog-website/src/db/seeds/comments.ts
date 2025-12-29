import { db } from '@/db';
import { comments } from '@/db/schema';

async function main() {
    const sampleComments = [
        // Post 1: Next.js App Router (4 comments)
        {
            postId: 1,
            authorName: 'Michael Zhang',
            authorEmail: 'michael.zhang@gmail.com',
            content: 'Great tutorial! The section on server components really cleared up my confusion about when to use client vs server components.',
            createdAt: new Date('2024-01-17').toISOString(),
        },
        {
            postId: 1,
            authorName: 'Jessica Thompson',
            authorEmail: 'j.thompson@email.com',
            content: 'This is exactly what I needed. Could you cover error boundaries in a follow-up post? Would love to see more examples with Suspense.',
            createdAt: new Date('2024-01-19').toISOString(),
        },
        {
            postId: 1,
            authorName: 'David Park',
            authorEmail: 'davidp@tech.com',
            content: 'The performance improvements with App Router are incredible. Switched our production app last week and seeing 40% faster page loads!',
            createdAt: new Date('2024-01-22').toISOString(),
        },
        {
            postId: 1,
            authorName: 'Amanda Foster',
            authorEmail: 'amanda.foster@dev.io',
            content: 'Quick question - how do you handle authentication with server components? Running into some issues with session management.',
            createdAt: new Date('2024-01-25').toISOString(),
        },

        // Post 2: Docker Production (3 comments)
        {
            postId: 2,
            authorName: 'Robert Kumar',
            authorEmail: 'robert.k@company.com',
            content: 'This helped me debug my Docker compose setup. Thanks for the production tips, especially the multi-stage build approach!',
            createdAt: new Date('2024-01-18').toISOString(),
        },
        {
            postId: 2,
            authorName: 'Lisa Martinez',
            authorEmail: 'lisa.martinez@enterprise.com',
            content: 'Been using Docker for 3 years but still learned something new here. The health check configuration is brilliant.',
            createdAt: new Date('2024-01-20').toISOString(),
        },
        {
            postId: 2,
            authorName: 'James Wilson',
            authorEmail: 'jwilson@devops.com',
            content: 'Would love to see a follow-up on Docker Swarm vs Kubernetes for small teams. Great content as always!',
            createdAt: new Date('2024-01-28').toISOString(),
        },

        // Post 3: React Server Components (4 comments)
        {
            postId: 3,
            authorName: 'Sarah Chen',
            authorEmail: 'sarah.chen@frontend.dev',
            content: 'Finally, a clear explanation of RSC! The waterfall diagram really helped visualize the data fetching flow.',
            createdAt: new Date('2024-01-21').toISOString(),
        },
        {
            postId: 3,
            authorName: 'Tom Anderson',
            authorEmail: 't.anderson@email.com',
            content: 'How do you handle forms with RSC? Still trying to figure out the best patterns for form validation.',
            createdAt: new Date('2024-01-23').toISOString(),
        },
        {
            postId: 3,
            authorName: 'Emily Rodriguez',
            authorEmail: 'emily.r@webdev.com',
            content: 'This is a game changer for our app. The automatic code splitting alone is worth the migration effort.',
            createdAt: new Date('2024-01-26').toISOString(),
        },
        {
            postId: 3,
            authorName: 'Chris Lee',
            authorEmail: 'chris.lee@startup.io',
            content: 'Great post! Any recommendations for testing RSC components? Our current testing setup is not working well.',
            createdAt: new Date('2024-02-01').toISOString(),
        },

        // Post 5: Kubernetes Guide (3 comments)
        {
            postId: 5,
            authorName: 'Mohammed Hassan',
            authorEmail: 'mohammed.h@cloud.com',
            content: 'I\'ve been using Kubernetes for 2 years and still learned something new here! The ingress controller examples are spot on.',
            createdAt: new Date('2024-01-24').toISOString(),
        },
        {
            postId: 5,
            authorName: 'Jennifer White',
            authorEmail: 'jen.white@devops.io',
            content: 'This guide saved me hours of debugging. The health probe configuration fixed our pod restart issues.',
            createdAt: new Date('2024-01-27').toISOString(),
        },
        {
            postId: 5,
            authorName: 'Alex Kumar',
            authorEmail: 'alex.kumar@enterprise.net',
            content: 'Could you cover Helm charts in your next post? Looking for best practices on managing multiple environments.',
            createdAt: new Date('2024-02-03').toISOString(),
        },

        // Post 7: PostgreSQL Performance (2 comments)
        {
            postId: 7,
            authorName: 'Daniel Kim',
            authorEmail: 'daniel.kim@database.com',
            content: 'The indexing strategies mentioned here cut our query time by 70%. Absolutely invaluable information!',
            createdAt: new Date('2024-01-29').toISOString(),
        },
        {
            postId: 7,
            authorName: 'Rachel Green',
            authorEmail: 'rachel.g@backend.dev',
            content: 'Thank you for the explain analyze examples. Finally understand how to read those query plans properly.',
            createdAt: new Date('2024-02-05').toISOString(),
        },

        // Post 9: Machine Learning Basics (3 comments)
        {
            postId: 9,
            authorName: 'Priya Sharma',
            authorEmail: 'priya.sharma@ml.ai',
            content: 'As someone transitioning from web dev to ML, this is exactly the introduction I needed. Looking forward to the next parts!',
            createdAt: new Date('2024-02-01').toISOString(),
        },
        {
            postId: 9,
            authorName: 'Marcus Johnson',
            authorEmail: 'marcus.j@data.science',
            content: 'The neural network visualization really helps understand the concept. Would love more content on deep learning.',
            createdAt: new Date('2024-02-04').toISOString(),
        },
        {
            postId: 9,
            authorName: 'Olivia Brown',
            authorEmail: 'olivia.brown@ai.tech',
            content: 'Great breakdown of supervised vs unsupervised learning. The real-world examples make it so much clearer.',
            createdAt: new Date('2024-02-08').toISOString(),
        },

        // Post 11: TypeScript Advanced (2 comments)
        {
            postId: 11,
            authorName: 'Nathan Wright',
            authorEmail: 'nathan.w@typescript.dev',
            content: 'The conditional types section blew my mind. Been writing TypeScript for years but never used them this way.',
            createdAt: new Date('2024-02-06').toISOString(),
        },
        {
            postId: 11,
            authorName: 'Sophie Turner',
            authorEmail: 'sophie.turner@fullstack.io',
            content: 'Finally understand template literal types! This will make our API client so much better. Thanks!',
            createdAt: new Date('2024-02-10').toISOString(),
        },

        // Post 13: GraphQL Best Practices (2 comments)
        {
            postId: 13,
            authorName: 'Kevin Patel',
            authorEmail: 'kevin.patel@graphql.dev',
            content: 'The N+1 query solution using DataLoader is exactly what we needed. Performance improved dramatically.',
            createdAt: new Date('2024-02-08').toISOString(),
        },
        {
            postId: 13,
            authorName: 'Michelle Davis',
            authorEmail: 'michelle.d@api.com',
            content: 'Could you write about GraphQL subscriptions next? We\'re implementing real-time features and need guidance.',
            createdAt: new Date('2024-02-12').toISOString(),
        },

        // Post 14: CI/CD Pipeline (3 comments)
        {
            postId: 14,
            authorName: 'Brian Thompson',
            authorEmail: 'brian.t@cicd.dev',
            content: 'This GitHub Actions workflow is production-ready. Implemented it yesterday and our deployment time dropped from 20 to 8 minutes!',
            createdAt: new Date('2024-02-09').toISOString(),
        },
        {
            postId: 14,
            authorName: 'Angela Martinez',
            authorEmail: 'angela.m@devops.io',
            content: 'The caching strategy for dependencies is genius. Saving so much build time now.',
            createdAt: new Date('2024-02-13').toISOString(),
        },
        {
            postId: 14,
            authorName: 'Steven Clark',
            authorEmail: 'steven.clark@automation.com',
            content: 'Would love to see a comparison with GitLab CI. Great article nonetheless!',
            createdAt: new Date('2024-02-15').toISOString(),
        },

        // Post 15: React Hooks Deep Dive (2 comments)
        {
            postId: 15,
            authorName: 'Laura Adams',
            authorEmail: 'laura.adams@react.dev',
            content: 'The useEffect cleanup explanation finally makes sense! Been struggling with memory leaks for weeks.',
            createdAt: new Date('2024-02-11').toISOString(),
        },
        {
            postId: 15,
            authorName: 'Jason Miller',
            authorEmail: 'jason.m@frontend.tech',
            content: 'Custom hooks section is gold. Already extracted 3 custom hooks from our codebase following these patterns.',
            createdAt: new Date('2024-02-16').toISOString(),
        },

        // Post 16: AWS Lambda (1 comment)
        {
            postId: 16,
            authorName: 'Victoria Santos',
            authorEmail: 'victoria.s@cloud.aws',
            content: 'The cold start optimization tips are incredibly useful. Cut our Lambda response time in half!',
            createdAt: new Date('2024-02-13').toISOString(),
        },

        // Post 17: Microservices Architecture (2 comments)
        {
            postId: 17,
            authorName: 'Ryan Cooper',
            authorEmail: 'ryan.cooper@architect.com',
            content: 'This is the most practical microservices guide I\'ve read. The service boundary examples are perfect.',
            createdAt: new Date('2024-02-14').toISOString(),
        },
        {
            postId: 17,
            authorName: 'Emma Wilson',
            authorEmail: 'emma.w@backend.dev',
            content: 'How do you handle distributed transactions? That\'s the one thing we\'re still struggling with.',
            createdAt: new Date('2024-02-18').toISOString(),
        },

        // Post 18: Web Performance (3 comments)
        {
            postId: 18,
            authorName: 'Carlos Rodriguez',
            authorEmail: 'carlos.r@performance.io',
            content: 'Implemented these optimizations and our Lighthouse score went from 65 to 95! Amazing tips.',
            createdAt: new Date('2024-02-15').toISOString(),
        },
        {
            postId: 18,
            authorName: 'Hannah Lee',
            authorEmail: 'hannah.lee@webperf.com',
            content: 'The lazy loading strategy for images is exactly what we needed. Page load time dropped by 3 seconds.',
            createdAt: new Date('2024-02-17').toISOString(),
        },
        {
            postId: 18,
            authorName: 'Patrick O\'Brien',
            authorEmail: 'patrick.obrien@speed.dev',
            content: 'Would love a follow-up on Core Web Vitals optimization. Great content!',
            createdAt: new Date('2024-02-20').toISOString(),
        },
    ];

    await db.insert(comments).values(sampleComments);
    
    console.log('✅ Comments seeder completed successfully');
}

main().catch((error) => {
    console.error('❌ Seeder failed:', error);
});