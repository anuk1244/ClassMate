import React from "react";
import { Session } from "@supabase/supabase-js";

import supabase from "../config/supabase";

import Layout from "../components/layout";

const Profile = ({ session }: { session: Session }) => {
    async function signout() {
        const { error } = await supabase.auth.signOut()
    }

    return (
        <Layout>
            <div className="h-1/2 bg-primary">
                <div className="text-base-100 text-5xl pl-8 pt-28 font-semibold flex">Ansh Patel</div>
                <div className="text-base-100 pl-8 pt-2 text-lg font-semibold flex">anshpatel@utexas.edu</div>
                <div className="underline underline-offset-1 pl-8 pt-10 text-md text-base-100 font-semibold flex">
                    <button>Edit Profile Details</button>
                </div>
                <div className="translate-x-3/4 scale-150">
                    <img className="rounded-full" src="data:image/jpeg;base64,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" alt="Ansh Patel" />
                </div>
            </div>
            <div className="h-1/2 bg-gradient-to-br from-base-100 via-purple-300 to-primary">
                <div className="text-primary font-semibold">
                    <button className="opacity-100 pl-12 pt-8">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#933AFF" className="bi bi-pencil-fill inline-block" viewBox="0 0 16 16">
                        <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"/></svg>Edit Course Details
                    </button>
                </div>
                <div className="text-primary font-semibold">
                    <button className="opacity-100 pl-12 pt-4">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#933AFF" className="bi bi-pencil-fill inline-block" viewBox="0 0 16 16">
                        <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"/></svg>Edit User Details
                    </button> 
                </div>
                <div className="pl-12 pt-10">
                    <button className="rounded-lg bg-accent text-base-100 px-5 py-1 opacity-90">Delete Account</button>
                </div>
            </div>
        </Layout>
    )
}

export default Profile