import { db } from '@/db';
import { categories } from '@/db/schema';

async function main() {
    const sampleCategories = [
        {
            name: 'Technology',
            slug: 'technology',
            description: 'General technology trends, news, and innovations',
            createdAt: new Date('2024-06-15').toISOString(),
        },
        {
            name: 'Web Development',
            slug: 'web-development',
            description: 'Front-end and back-end web development tutorials and best practices',
            createdAt: new Date('2024-06-20').toISOString(),
        },
        {
            name: 'AI & Machine Learning',
            slug: 'ai-machine-learning',
            description: 'Artificial intelligence, machine learning, and data science articles',
            createdAt: new Date('2024-07-01').toISOString(),
        },
        {
            name: 'DevOps',
            slug: 'devops',
            description: 'DevOps practices, CI/CD, infrastructure, and automation',
            createdAt: new Date('2024-07-10').toISOString(),
        },
        {
            name: 'Mobile Development',
            slug: 'mobile-development',
            description: 'iOS, Android, and cross-platform mobile app development',
            createdAt: new Date('2024-07-20').toISOString(),
        },
        {
            name: 'Cloud Computing',
            slug: 'cloud-computing',
            description: 'Cloud platforms, architectures, and serverless computing',
            createdAt: new Date('2024-08-01').toISOString(),
        },
        {
            name: 'Cybersecurity',
            slug: 'cybersecurity',
            description: 'Security best practices, ethical hacking, and application security',
            createdAt: new Date('2024-08-10').toISOString(),
        },
        {
            name: 'Open Source',
            slug: 'open-source',
            description: 'Open source projects, contributions, and community-driven development',
            createdAt: new Date('2024-08-20').toISOString(),
        },
    ];

    await db.insert(categories).values(sampleCategories);
    
    console.log('✅ Categories seeder completed successfully');
}

main().catch((error) => {
    console.error('❌ Seeder failed:', error);
});