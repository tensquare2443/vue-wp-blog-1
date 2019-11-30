<template>
  <div>
    <div v-if="posts.length > 0" class="edit-posts">
      <div class="filter-posts">
        <div class="filter-posts__txt-container">
          <p class="filter-posts__txt">Filter by:</p>
        </div>
        <div v-if="filter" class="filter-btn__container">
          <div class="filter-btn">
            <p class="filter-btn__txt">{{ displayFilter() }}</p>
            <svg
              @click="fetchPosts(false, sort)"
              class="filter-btn__close"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="2 2 20 20"
            >
              <path
                d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
              />
              <path d="M0 0h24v24H0z" fill="none" />
            </svg>
          </div>
        </div>
        <div
          v-if="!filter"
          class="filter-posts__btn-container"
          dd-element="true"
        >
          <div
            @click="initiateFilterPosts"
            class="filter-posts__btn dropdown-btn"
            :class="{ 'non-btn': filtering }"
            data-id="author dropdown-btn"
            dd-element="true"
          >
            <p dd-element="true" class="filter-posts__btn-txt">Author</p>
          </div>
          <div
            v-if="filtering === 'author'"
            class="filter-posts__dropdown-items-container"
          >
            <div class="filter-posts__dropdown-items">
              <div
                v-for="author in authors"
                @click="initiateFilterPosts"
                class="filter-posts__btn"
                :data-id="'author ' + author.id"
              >
                <p class="filter-posts__btn-txt">{{ author.name }}</p>
              </div>
            </div>
          </div>
        </div>
        <div
          v-if="!filter"
          class="filter-posts__btn-container--right"
          dd-element="true"
        >
          <div
            @click="initiateFilterPosts"
            class="filter-posts__btn dropdown-btn"
            data-id="postCategory dropdown-btn"
            dd-element="true"
          >
            <p dd-element="true" class="filter-posts__btn-txt">Category</p>
          </div>
          <div
            v-if="filtering === 'postCategory'"
            class="filter-posts__dropdown-items-container"
          >
            <div class="filter-posts__dropdown-items">
              <div
                v-for="postCategory in postCategories"
                @click="initiateFilterPosts"
                class="filter-posts__btn"
                :data-id="'postCategory ' + postCategory.id"
              >
                <p class="filter-posts__btn-txt">{{ postCategory.name }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="sort-posts" dd-element="true">
        <div class="sort-posts__txt-container">
          <p class="sort-posts__txt">Sort by:</p>
        </div>
        <div
          v-if="sorting"
          @click="initiateSortPosts"
          class="sort-posts__btn dropdown-btn"
          data-id="dropdown-btn"
          dd-element="true"
        >
          <p
            dd-element="true"
            class="sort-posts__btn-txt"
            style="margin-left: 0;"
          >
            Sort:
          </p>
        </div>
        <div v-else>
          <SortPostsBtn
            :initiateSortPosts="initiateSortPosts"
            :sort="sort"
            :btn="sort"
          />
        </div>

        <div v-if="sorting" class="sort-posts__dropdown-items">
          <SortPostsBtn
            v-for="sortType in sortTypes"
            :sort="sort"
            :initiateSortPosts="initiateSortPosts"
            :btn="sortType"
            :key="sortType"
          />
        </div>
      </div>
    </div>

    <Posts
      :posts="posts"
      :postsLoading="postsLoading"
      :postAuthorsLoading="postAuthorsLoading"
      :fetchPost="fetchPost"
      :fetchPosts="fetchPosts"
    />
  </div>
</template>

<script>
import Posts from "../components/Posts";
import SortPostsBtn from "../components/SortPostsBtn";

export default {
  data() {
    return {
      sortTypes: [
        "date-ascending",
        "date-descending",
        "alph-ascending",
        "alph-descending"
      ]
    };
  },
  components: {
    Posts,
    SortPostsBtn
  },
  props: [
    "posts",
    "postsLoading",
    "postAuthorsLoading",
    "fetchPosts",
    "authors",
    "fetchAuthors",
    "postCategories",
    "fetchPostCategories",
    "fetchPost",
    "filter",
    "filtering",
    "toggleFiltering",
    "sort",
    "sorting",
    "toggleSorting"
  ],
  created() {
    if (this.posts.length === 0) {
      this.fetchPosts(false, "date-ascending");
    }
  },
  methods: {
    initiateFilterPosts: function(e) {
      if (this.sorting) this.toggleSorting();

      const filter = e.currentTarget.dataset.id;

      if (this.filtering) {
        if (filter.split(" ")[1] !== "dropdown-btn") {
          this.fetchPosts(filter, this.sort);
        }

        if (filter.split(" ")[0] === this.filtering) {
          this.toggleFiltering();
        } else {
          this.toggleFiltering(filter.split(" ")[0]);
        }
      } else this.toggleFiltering(filter.split(" ")[0]);
    },
    initiateSortPosts: function(e) {
      if (this.filtering) this.toggleFiltering();

      if (this.sorting) {
        const sort = e.currentTarget.dataset.id;

        if (sort !== "dropdown-btn") {
          this.fetchPosts(this.filter, sort);
        }
      }

      this.toggleSorting();
    },
    displayFilter() {
      const filterTypePlurals = {
        author: "authors",
        postCategory: "postCategories"
      };
      const filterTypeDisplayed = {
        author: "Author",
        postCategory: "Category"
      };
      const filterDetails = this.filter.split(" ");
      const filterType = filterTypePlurals[filterDetails[0]];
      const filterValue = +filterDetails[1];

      for (var i = 0; i < this[filterType].length; i++) {
        if (this[filterType][i].id === filterValue) {
          return `${filterTypeDisplayed[filterDetails[0]]}: ${
            this[filterType][i].name
          }`;
        }
      }
    }
  },
  mounted() {
    // this.fetchPosts(this.filter, "date-ascending");
    this.fetchAuthors();
    this.fetchPostCategories();
  }
};
</script>

<style scoped>
.edit-posts {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 15px;
}
.filter-posts {
  display: flex;
  align-items: center;
}
.filter-posts__txt {
  margin: 0 10px 0 0;
}
.filter-posts__btn {
  display: flex;
  align-items: center;
  background-color: #ddd;
  padding: 5px 15px;
  cursor: pointer;
  transition: background-color 0.2s;
}
.filter-posts__btn:hover {
  background-color: #ccc;
}
.filter-posts__btn.non-btn:hover {
  background-color: #ddd;
}
.filter-posts__btn-txt {
  margin: 0;
}
.filter-posts__dropdown-items-container {
  position: relative;
}
.filter-posts__dropdown-items {
  position: absolute;
}
.filter-btn {
  display: flex;
  align-items: center;
  background-color: #ddd;
  padding: 5px 15px;
}
.filter-btn__txt {
  margin: 0;
}
.filter-btn__close {
  margin-left: 8px;
  cursor: pointer;
  border-radius: 50%;
  padding: 2px;
  transition: background-color 0.2s;
}
.filter-btn__close:hover {
  background-color: #ccc;
}
.sort-posts {
  position: relative;
}
.sort-posts__txt-container {
  display: none;
}
.sort-posts__btn {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ddd;
  padding: 5px 8px;
  width: 68px;
  cursor: pointer;
  transition: background-color 0.2s;
}
.sort-posts__btn.dropdown-btn:hover {
  background-color: #ddd;
}
.sort-posts__btn-txt {
  margin: 0 0 0 5px;
}
.sort-posts__dropdown-items {
  position: absolute;
}

.filter-posts__btn-container--right {
  margin-left: 5px;
}

@media (max-width: 500px) {
  .edit-posts {
    flex-direction: column;
  }
  .filter-posts {
    flex-direction: column;
    width: 100%;
  }
  .filter-posts__txt-container {
    margin-bottom: 5px;
  }
  .filter-posts__txt {
    margin: 0;
  }
  .filter-posts__btn-container {
    width: 100%;
    margin-bottom: 5px;
  }
  .filter-posts__btn-container--right {
    margin-left: 0;
    margin-bottom: 5px;
    width: 100%;
  }
  .filter-posts__btn-txt {
    margin-left: auto;
    margin-right: auto;
  }
  .filter-posts__dropdown-items {
    position: initial;
  }
  .filter-btn__container {
    width: 100%;
    margin-top: 0;
  }
  .filter-btn {
    justify-content: center;
  }
  .sort-posts {
    width: 100%;
  }
  .sort-posts__txt-container {
    display: block;
    margin-top: 5px;
    margin-bottom: 5px;
  }
  .sort-posts__txt {
    margin: 0;
    text-align: center;
  }
  .sort-posts__btn {
    width: 100% !important;
    box-sizing: border-box;
  }
  .sort-posts__dropdown-items {
    position: initial;
  }
}
</style>
