import { db } from '@/db';
import { authors } from '@/db/schema';

async function main() {
    const sampleAuthors = [
        {
            name: 'Sarah Chen',
            email: 'sarah.chen@techwriter.io',
            bio: 'Full-stack developer and technical writer with 8+ years of experience. Passionate about React, Next.js, and modern web development.',
            avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah',
            twitterHandle: '@sarahcodes',
            githubHandle: 'sarahchen',
            createdAt: new Date('2024-06-15').toISOString(),
        },
        {
            name: 'Marcus Rodriguez',
            email: 'marcus.r@devblog.com',
            bio: 'DevOps engineer and cloud architect. Love sharing insights about Kubernetes, Docker, and infrastructure as code.',
            avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Marcus',
            twitterHandle: '@marcusdevops',
            githubHandle: 'marcusrodriguez',
            createdAt: new Date('2024-07-20').toISOString(),
        },
        {
            name: 'Aisha Patel',
            email: 'aisha.patel@mlwriter.dev',
            bio: 'Machine learning engineer and AI researcher. Writing about neural networks, data science, and practical ML applications.',
            avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Aisha',
            twitterHandle: '@aishaml',
            githubHandle: 'aishapatel',
            createdAt: new Date('2024-08-10').toISOString(),
        },
        {
            name: "James O'Connor",
            email: 'james.oconnor@mobilefirst.io',
            bio: 'Mobile development expert specializing in React Native and Flutter. Building cross-platform apps for 6+ years.',
            avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=James',
            twitterHandle: '@jamesmobile',
            githubHandle: 'jamesoconnor',
            createdAt: new Date('2024-09-05').toISOString(),
        },
        {
            name: 'Elena Volkov',
            email: 'elena.v@security.dev',
            bio: 'Cybersecurity specialist and ethical hacker. Sharing best practices for secure coding and application security.',
            avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Elena',
            twitterHandle: '@elenasecurity',
            githubHandle: 'elenavolkov',
            createdAt: new Date('2024-10-12').toISOString(),
        },
    ];

    await db.insert(authors).values(sampleAuthors);
    
    console.log('✅ Authors seeder completed successfully');
}

main().catch((error) => {
    console.error('❌ Seeder failed:', error);
});