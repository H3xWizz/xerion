import { PrismaAdapter } from "@next-auth/prisma-adapter"
import {AuthOptions} from "next-auth";
import {prisma} from "@/lib/prisma";
import CredentialsProvider from "next-auth/providers/credentials"
import bcrypt from "bcrypt"

const authOptions: AuthOptions = {
    adapter: PrismaAdapter(prisma),
    providers: [
        CredentialsProvider({
            name: "login",
            credentials: {
                username: {
                    label: "Username",
                    type: "text",
                    placeholder: "johndoe",
                },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials, req) {
                try {
                    if (!credentials?.username || !credentials?.password) return null

                    const user = await prisma.user.findUnique({
                        where: {
                            username: credentials?.username
                        }
                    })

                    if (!user) return null

                    const passwordMatch = bcrypt.compareSync(credentials.password, user.hashedPassword);

                    if (!passwordMatch) return null

                    return user
                } catch (e) {
                    console.error('Error:', e)
                    return null
                }
            }
        }),
    ],
    session: {
        strategy: "jwt"
    },
    secret: process.env.NEXTAUTH_SECRET,
    // debug: process.env.NODE_ENV === 'development'
}

export default authOptions;