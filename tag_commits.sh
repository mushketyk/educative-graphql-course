#!/bin/bash

# set -x
set -e
set -o pipefail


tag_commit() {
    local commit_message=$1
    local tag_name=$2

    echo "Searching for commit with message \"$commit_message\""
    local commit_id=$(git log --oneline | grep --fixed-strings "$commit_message" | cut -d " " -f1)
    if [ -z "$commit_id" ]
    then
        echo "No commit with message '$commit_message'"
        exit 1
    fi
    echo "Tagging commit $commit_id -> $tag_name"
    git tag -f $tag_name $commit_id
}

git tag | xargs git tag -d
tag_commit "Components testing with GraphQL" react-testing
tag_commit "Implements pagiantion on the client" client-pagination
tag_commit "Server-side pagination" server-pagination
tag_commit "Optimistic response" optimistic-response
tag_commit "Update products cache exercise solution" update-product-cache-solution
tag_commit "Update products cache exercise setup" update-product-cache-exercise
tag_commit "Automatically update cache" cache-updates
tag_commit "Data loader exercise solution" data-loader-solution
tag_commit "DataLoader exercise" data-loader-exercise
tag_commit "DataLoader implementation" data-loader-implementation
tag_commit "Client authentication" client-auth
tag_commit "Backend auth" server-auth
tag_commit "Upvote mutation solution" upvote-mutation-solution
tag_commit "Upvote mutation exercise set up" upvote-mutation-exercise
tag_commit "Adds upvoteProduct method" upvote-product
tag_commit "Fixes cache issues" fix-cache-issues
tag_commit "Mutations on the frontend" frontend-mutations
tag_commit "Frontend queries exercise solution" frontend-queries-solution
tag_commit "Frontend query exercise setup" frontend-queries-solution-setup
tag_commit "Using fragments" using-fragments
tag_commit "Query parameters on the frontend" client-query-parameters
tag_commit "[Client] Get all products" client-queries
tag_commit "Layout implemented" ui-setup
tag_commit "Implements errors handling" error-handling
tag_commit "[Exercise - solution] Categories mutation" categories-mutation-solution
tag_commit "[Exercise - set up] New categories mutation" categories-mutation-exercise
tag_commit "First mutation" first-mutation
tag_commit "[Exercise solution] Integrate user resolvers to a DB" db-resolver-solution
tag_commit "[Exercise set up] Integrate user resolvers to a DB" db-resolver-exercise
tag_commit "Integrate resolvers with the DB" db-resolvers
tag_commit "[Server] DB setup" db-setup
tag_commit "Categories implementation" categories-solution
tag_commit "Categories set up" categories-exercise
tag_commit "Queries with parameters" queries-parameters
tag_commit "Nested resolver" nested-resolver
tag_commit "[Server - 2] GraphQL resolver" graphql-resolver
tag_commit "Refactored version" initial-version-refactored
tag_commit "Initial version" initial-version