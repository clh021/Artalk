package query

import (
	"testing"

	"github.com/stretchr/testify/assert"
)

func TestFindComment(t *testing.T) {
	reloadTestDatabase()

	type args struct {
		id uint
	}
	type wants struct {
		id        uint
		rid       uint
		user_id   uint
		page_key  string
		site_name string
	}
	tests := []struct {
		name  string
		args  args
		wants wants
	}{
		{name: "评论 ID=1000", args: args{id: 1000}, wants: wants{id: 1000, rid: 0, user_id: 1000, page_key: "/test/1000.html", site_name: "Site A"}},
		{name: "评论 ID=1001", args: args{id: 1001}, wants: wants{id: 1001, rid: 1000, user_id: 1001, page_key: "/test/1000.html", site_name: "Site A"}},
		{name: "评论 ID=1006", args: args{id: 1006}, wants: wants{id: 1006, rid: 0, user_id: 1001, page_key: "/site_b/1001.html", site_name: "Site B"}},
		{name: "不存在的评论", args: args{id: 9999}, wants: wants{id: 0, rid: 0, user_id: 0, page_key: "", site_name: ""}},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			got := FindComment(tt.args.id)
			assert.Equal(t, tt.wants.id, got.ID)
			assert.Equal(t, tt.wants.rid, got.Rid)
			assert.Equal(t, tt.wants.user_id, got.UserID)
			assert.Equal(t, tt.wants.page_key, got.PageKey)
			assert.Equal(t, tt.wants.site_name, got.SiteName)
			if tt.name != "不存在的评论" {
				assert.NotEmpty(t, got.Content)
			}
		})
	}
}

func TestFindCommentChildrenShallow(t *testing.T) {
	reloadTestDatabase()

	t.Run("Children Found", func(t *testing.T) {
		result := FindCommentChildrenShallow(1001)
		assert.Equal(t, 2, len(result))
	})

	t.Run("No Children Found", func(t *testing.T) {
		result := FindCommentChildrenShallow(1005)
		assert.Empty(t, result)
	})
}

func TestFindCommentChildren(t *testing.T) {
	reloadTestDatabase()

	t.Run("Children Found", func(t *testing.T) {
		result := FindCommentChildren(1000)
		assert.Equal(t, 4, len(result))
	})

	t.Run("No Children Found", func(t *testing.T) {
		result := FindCommentChildren(1005)
		assert.Empty(t, result)
	})
}

func TestFindUser(t *testing.T) {
	reloadTestDatabase()

	t.Run("User Found", func(t *testing.T) {
		result := FindUser("admin", "admin@qwqaq.com")
		assert.False(t, result.IsEmpty())
		assert.Equal(t, uint(1000), result.ID)
		assert.Equal(t, "admin", result.Name)
		assert.Equal(t, "admin@qwqaq.com", result.Email)
		assert.Equal(t, "123456", result.Password)
		assert.Equal(t, true, result.IsAdmin)
		assert.Equal(t, "", result.SiteNames)
		assert.Equal(t, "管理员", result.BadgeName)
	})

	t.Run("User not Found", func(t *testing.T) {
		result := FindUser("NoUser", "NoUser@example.org")
		assert.True(t, result.IsEmpty())
	})
}

func TestFindUserByID(t *testing.T) {
	reloadTestDatabase()

	t.Run("User Found", func(t *testing.T) {
		result := FindUserByID(1000)
		assert.False(t, result.IsEmpty())
		assert.Equal(t, uint(1000), result.ID)
		assert.Equal(t, "admin", result.Name)
		assert.Equal(t, "admin@qwqaq.com", result.Email)
		assert.Equal(t, "123456", result.Password)
		assert.Equal(t, true, result.IsAdmin)
		assert.Equal(t, "", result.SiteNames)
		assert.Equal(t, "管理员", result.BadgeName)
	})

	t.Run("User not Found", func(t *testing.T) {
		result := FindUserByID(9999)
		assert.True(t, result.IsEmpty())
	})
}

func TestFindPage(t *testing.T) {
	reloadTestDatabase()

	t.Run("Page Found", func(t *testing.T) {
		result := FindPage("/site_b/1001.html", "Site B")
		assert.False(t, result.IsEmpty())
		assert.Equal(t, uint(1001), result.ID)
		assert.Equal(t, "测试页面标题 1001", result.Title)
		assert.Equal(t, true, result.AdminOnly)
	})

	t.Run("Page not Found", func(t *testing.T) {
		result := FindPage("/NotExistPage", "NotExistSite")
		assert.True(t, result.IsEmpty())
	})
}

func TestFindPageByID(t *testing.T) {
	reloadTestDatabase()

	t.Run("Page Found", func(t *testing.T) {
		result := FindPageByID(1001)
		assert.False(t, result.IsEmpty())
		assert.Equal(t, uint(1001), result.ID)
		assert.Equal(t, "测试页面标题 1001", result.Title)
		assert.Equal(t, true, result.AdminOnly)
	})

	t.Run("Page not Found", func(t *testing.T) {
		result := FindPageByID(9999)
		assert.True(t, result.IsEmpty())
	})
}

func TestFindSite(t *testing.T) {
	reloadTestDatabase()

	t.Run("Site Found", func(t *testing.T) {
		result := FindSite("Site A")
		assert.False(t, result.IsEmpty())
		assert.Equal(t, uint(1000), result.ID)
		assert.Equal(t, "Site A", result.Name)
		assert.Equal(t, "http://localhost:8080/,https://qwqaq.com", result.Urls)
	})

	t.Run("Site not Found", func(t *testing.T) {
		result := FindSite("NotExistSite")
		assert.True(t, result.IsEmpty())
	})
}

func TestFindSiteByID(t *testing.T) {
	reloadTestDatabase()

	t.Run("Site Found", func(t *testing.T) {
		result := FindSiteByID(1000)
		assert.False(t, result.IsEmpty())
		assert.Equal(t, uint(1000), result.ID)
		assert.Equal(t, "Site A", result.Name)
		assert.Equal(t, "http://localhost:8080/,https://qwqaq.com", result.Urls)
	})

	t.Run("Site not Found", func(t *testing.T) {
		result := FindSiteByID(9999)
		assert.True(t, result.IsEmpty())
	})
}

func TestFindAllSites(t *testing.T) {
	reloadTestDatabase()

	allSites := FindAllSites()
	assert.GreaterOrEqual(t, len(allSites), 1)
}

func TestGetAllAdmins(t *testing.T) {
	reloadTestDatabase()

	allAdmins := GetAllAdmins()
	assert.GreaterOrEqual(t, len(allAdmins), 1)
}

func TestIsAdminUser(t *testing.T) {
	reloadTestDatabase()

	assert.Equal(t, true, IsAdminUser(1000))
}

func TestIsAdminUserByNameEmail(t *testing.T) {
	reloadTestDatabase()

	assert.Equal(t, true, IsAdminUserByNameEmail("admin", "admin@qwqaq.com"))
}
